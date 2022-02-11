import { useCallback, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { PeriNoteTreeNode } from "../../../utils/dataType";
import { deepCopyTree, getNodeByPath } from "../../../utils/tree";
import { Button } from "../../common/styled/Button";
import { ExButton, PeriModal, PriorQuestion, StepUp } from "..";
import { StStepModalWrapper } from "../preNote/PreNoteForm";

export default function PeriNote() {
  const [isLogin, userToken, initIndex, isSave, isPrevented, handlePrevent, handleOpenDrawer, handleCloseDrawer] =
    useOutletContext<
      [boolean, string, number, boolean, boolean, (shouldPrevent: boolean) => void, (i: number) => void, () => void]
    >();

  const [root, setRoot] = useState<PeriNoteTreeNode>({ type: "root", content: "ROOT", children: [] });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAddChild = (path: number[], isQuestion: boolean) => {
    // 깊은 복사 후 위치를 찾아 새로운 node를 추가하고 root를 set에 넘김
    const newRoot = deepCopyTree(root);
    const current = getNodeByPath(newRoot, path);

    if (isQuestion) {
      current.children.push({
        type: "question",
        content: "",
        children: [],
      });
    }
    current.children.push({
      type: "answer",
      content: "",
      children: [],
    });

    setRoot(newRoot);
  };

  const handleSetContent = (path: number[], value: string) => {
    const newRoot = deepCopyTree(root);
    const current = getNodeByPath(newRoot, path);

    current.content = value;

    setRoot(newRoot);
  };

  const handleDeleteChild = (path: number[]) => {
    const newRoot = deepCopyTree(root);
    // 삭제할 때는 자신의 부모를 찾아서 children을 제거
    const parent = getNodeByPath(newRoot, path.slice(0, -1));

    parent.children.splice(path[path.length - 1], 1);
    setRoot(newRoot);
  };

  const handlePeriCarousel = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  // 데이터 확인용
  useEffect(() => {
    console.log("root", root.children);
  }, [root]);

  return (
    <>
      <StNoteForm>
        <StLabelWrapper>
          <StLabelContainer>
            <StLabel>질문 리스트를 구조화하며 책을 읽어보세요.</StLabel>
            <StepUp onToggleModal={handlePeriCarousel} />
          </StLabelContainer>
          <ExButton idx={4} onOpenDrawer={handleOpenDrawer} />
        </StLabelWrapper>
        {root.children.map((node, idx) => (
          <PriorQuestion
            key={`input-${idx}`}
            path={[idx]}
            node={node}
            onAddChild={handleAddChild}
            onSetContent={handleSetContent}
            onDeleteChild={handleDeleteChild}
          />
        ))}
        <StAddChildButton type="button" disabled={false} onClick={() => handleAddChild([], true)}>
          질문 리스트 추가
        </StAddChildButton>
        {/* 북노트 정리되면 type submit으로 바꾸기 */}
        <StSubmitButton type="button" disabled={false}>
          작성 완료
        </StSubmitButton>
      </StNoteForm>
      {openModal && (
        <StStepModalWrapper>
          <PeriModal onToggleModal={handlePeriCarousel} />
        </StStepModalWrapper>
      )}
    </>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  max-height: fit-content;
`;

const StLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.6rem 0 4.6rem 2rem;
`;

const StLabelContainer = styled.div`
  display: flex;
`;

const StLabel = styled.label`
  margin-left: 2rem;
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StAddChildButton = styled(Button)<{ disabled: boolean }>`
  margin-top: 1rem;
  padding: 2.35rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;

  width: 100%;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.white500 : theme.colors.gray100)};
  ${({ theme }) => theme.fonts.button}
`;

const StSubmitButton = styled(Button)<{ disabled: boolean }>`
  margin-top: 6rem;
  margin-left: auto;
  border-radius: 1rem;

  width: 32.5rem;
  height: 5.6rem;
  ${({ theme }) => theme.fonts.button}

  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.white400 : theme.colors.orange100)};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.gray300 : theme.colors.white)};
`;
