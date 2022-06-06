import { useDeferredValue, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

import { IcPeriQuestion } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { StAddAnswerButton, StMenuBtn } from "../../common/styled/Button";
import { StMoreIcon } from "../../common/styled/Icon";
import { StMenuWrapper } from "../../common/styled/MenuWrapper";
import { PriorAnswer } from "..";
import { FormController } from "./PeriNote";

interface PriorQuestionProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], currentIndex: number, isQuestion: boolean) => void;
  onSetContent: (value: string, path: number[]) => void;
  onDeleteChild: (path: number[]) => void;
  formController: FormController;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild, formController } = props;
  const [urgentQuery, setUrgentQuery] = useState<string>(node.content);
  const deferredQuery = useDeferredValue<string>(urgentQuery);

  // 답변 추가 시 사용되는 변수라서 isQuestion false인 것
  const isQuestion = false;
  // 큰 답변 추가시 사용되는 index는 현재 큰질문의 index가 아닌 답변의 개수
  const currentIndex = node.children.length - 1;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value !== "\n") {
      setUrgentQuery(e.target.value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>, pathArray: number[]) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onAddChild(pathArray, currentIndex, isQuestion);
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  // react가 바쁘지 않은 시점에 path를 찾아 urgentQuery에 모인 내용을 periNote로 업데이트
  useEffect(() => {
    onSetContent(deferredQuery, path);
  }, [deferredQuery]);

  return (
    <>
      <StFieldset>
        <legend>
          <StQuestionIcon />
        </legend>
        <StInput
          ref={textAreaRef}
          value={urgentQuery}
          placeholder={"질문을 입력해주세요."}
          onChange={handleContent}
          onKeyPress={(e) => handleKeyPress(e, path)}
        />
        <StAddAnswerButton type="button" onClick={() => onAddChild(path, currentIndex, isQuestion)}>
          답변
        </StAddAnswerButton>
        <StMoreIcon className="icn_more" />
        <StMenuWrapper menuposition={"isPriQ"}>
          <StMenuBtn type="button" onClick={() => onDeleteChild(path)}>
            삭제
          </StMenuBtn>
        </StMenuWrapper>
      </StFieldset>
      {node.children &&
        node.children.map((node, i) => (
          <PriorAnswer
            key={i}
            path={[...path, i]}
            index={i}
            node={node}
            onAddChild={(p, i, isQ) => onAddChild(p, i, isQ)}
            onSetContent={(v, p) => onSetContent(v, p)}
            onDeleteChild={(p) => onDeleteChild(p)}
            formController={formController}
          />
        ))}
    </>
  );
}

const StFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};

  padding: 2.6rem 4.4rem 2.6rem 8.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 0.8rem;
`;

const StInput = styled(TextareaAutosize)`
  flex: 1;
  margin: 0;
  min-height: 2.6rem;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
