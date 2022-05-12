import { useCallback, useEffect, useState } from "react";
import { useForm, UseFormRegister, UseFormSetFocus } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { PeriNoteData, PreNoteData } from "../../../pages/BookNote";
import { periNoteStepUp } from "../../../utils/exampleData";
import { patchBookNote } from "../../../utils/lib/api";
import { deepCopyTree, getNodeByPath } from "../../../utils/tree";
import { useFetchNote } from "../../../utils/useHooks";
import { Loading } from "../../common";
import { Button } from "../../common/styled/Button";
import { StStepModalWrapper } from "../../common/styled/StepModalWrapper";
import { Complete, ExButton, PriorQuestion, StepUp, StepUpLayout } from "..";

export interface BookData {
  author: string[];
  publicationDt: string;
  thumbnail: string;
  title: string;
  translator: string[];
}

export interface FormData {
  [key: string]: string;
}

export interface FormController {
  register: UseFormRegister<FormData>;
  setFocus: UseFormSetFocus<FormData>;
}

export default function PeriNote() {
  const [reviewId, userToken, navIndex, isSave, handleOpenDrawer, handleCloseDrawer, preventGoBack, saveReview] =
    useOutletContext<
      [
        string,
        string,
        number,
        boolean,
        (i: number) => void,
        () => void,
        () => void,
        (body: PreNoteData | PeriNoteData) => Promise<void>,
      ]
    >();

  const { getValues, register, setFocus } = useForm<FormData>();

  const { data, setData, isLoading } = useFetchNote<PeriNoteData>(userToken, `/review/${reviewId}/peri`, {
    answerThree: {
      type: "ROOT",
      content: "root",
      children: [{ type: "question", content: "", children: [{ type: "answer", content: "", children: [] }] }],
    },
    reviewSt: 3,
  });

  const [bookData, setBookData] = useState<BookData>({
    author: [""],
    publicationDt: "",
    thumbnail: "",
    title: "",
    translator: [""],
  });
  const [isPrevented, setIsPrevented] = useState({ addQuestion: true, isCompleted: true });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSubmitModal, setOpenSubmitModal] = useState<boolean>(false);

  const addQuestion = (path: number[]) => {
    // 깊은 복사 후 위치를 찾아 새로운 node를 추가하고 root를 set에 넘김
    const newRoot = deepCopyTree(data.answerThree);
    const current = getNodeByPath(newRoot, path);

    current.children.push({
      type: "question",
      content: "",
      children: [
        {
          type: "answer",
          content: "",
          children: [],
        },
      ],
    });

    setData({ ...data, answerThree: newRoot });
  };

  const addAnswer = (path: number[], currentIndex: number) => {
    const newRoot = saveStatelessPeriNoteData();
    const current = getNodeByPath(newRoot, path);

    current.children.splice(currentIndex + 1, 0, {
      type: "answer",
      content: "",
      children: [],
    });

    setData({ ...data, answerThree: newRoot });
  };

  const handleAddChild = (path: number[], currentIndex: number, isQuestion: boolean) => {
    if (isQuestion) {
      addQuestion(path);
    } else {
      addAnswer(path, currentIndex);
    }
  };

  const handleSetContent = (value: string, path: number[]) => {
    const newRoot = deepCopyTree(data.answerThree);
    const current = getNodeByPath(newRoot, path);

    current.content = value;

    setData({ ...data, answerThree: newRoot });
  };

  const handleDeleteChild = (path: number[]) => {
    const newRoot = deepCopyTree(data.answerThree);
    // 삭제할 때는 자신의 부모를 찾아서 children을 제거
    const parent = getNodeByPath(newRoot, path.slice(0, -1));

    parent.children.splice(path[path.length - 1], 1);
    setData({ ...data, answerThree: newRoot });
  };

  const handlePeriCarousel = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  function toggleMenu(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    // as를 없애고 싶다
    const targetElement = e.target as HTMLElement;

    if (!targetElement.closest(".icn_more")) {
      const element = document.querySelector(".open") as HTMLElement;

      if (element) {
        element.style.display = "none";
        element.classList.remove("open");
      }

      return;
    }

    const miniMenu = targetElement.closest(".icn_more")?.nextElementSibling;

    if (miniMenu === null || miniMenu === undefined || !(miniMenu instanceof HTMLElement)) return;

    if (miniMenu.style.display === "none") {
      miniMenu.style.display = "block";
      miniMenu.classList.add("open");
    } else {
      miniMenu.style.display = "none";
      miniMenu.classList.remove("open");
    }
  }

  const saveStatelessPeriNoteData = () => {
    const obj = getValues();

    const keys = Object.keys(obj);
    const newRoot = deepCopyTree(data.answerThree);

    keys.map((key) => {
      const value = obj[key];
      const pathKey = key.split(",").map((k) => parseInt(k));

      const current = getNodeByPath(newRoot, pathKey);

      current.content = value;
    });

    // data state에도 저장
    setData((current) => ({ ...current, answerThree: newRoot }));

    return newRoot;
  };

  const submitPeriNote = () => {
    const dataToPatch = saveStatelessPeriNoteData();

    patchBookNote(userToken, `/review/${reviewId}/peri`, {
      answerThree: dataToPatch,
      reviewSt: 4,
    }).then((res) => {
      setBookData(res.bookData);
      setOpenSubmitModal(true);
    });
  };

  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => {
      window.removeEventListener("popstate", preventGoBack);
      handleCloseDrawer();
    };
  }, []);

  useEffect(() => {
    // 모든 질문 리스트가 지워졌을 경우에는 질문 리스트 추가만 가능하게 하고, 작성완료는 불가하게 함
    if (!data.answerThree.children.length) {
      setIsPrevented({ addQuestion: false, isCompleted: true });
    } else {
      // 질문이 모두 채워져 있으면 addQuestion의 isPrevented를 false
      if (data.answerThree.children.every((nodeList) => nodeList.content !== "")) {
        // 질문이 모두 채워진 상태에서 답변이 채워지면 모두 false
        if (data.answerThree.children.every((nodeList) => nodeList.children.every((node) => node.content !== ""))) {
          setIsPrevented({ addQuestion: false, isCompleted: false });
        } else {
          // 답변만 비워있으면 isCompleted만 true
          setIsPrevented({ addQuestion: false, isCompleted: true });
        }
      } else {
        // 질문이 비워져있으면 둘 다 true;
        setIsPrevented({ addQuestion: true, isCompleted: true });
      }
    }
  }, [data.answerThree]);

  useEffect(() => {
    if (navIndex && isSave) {
      const dataToPatch = saveStatelessPeriNoteData();

      saveReview({ ...data, answerThree: dataToPatch });
    }
  }, [isSave, navIndex]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <StNoteForm onClick={toggleMenu}>
          <StLabelWrapper>
            <StLabelContainer>
              <StLabel>질문 리스트를 구조화하며 책을 읽어보세요.</StLabel>
              <StepUp onToggleModal={handlePeriCarousel} />
            </StLabelContainer>
            <ExButton idx={4} onOpenDrawer={handleOpenDrawer} />
          </StLabelWrapper>
          {data.answerThree?.children &&
            data.answerThree.children.map((node, idx) => (
              <StArticle key={`input-${idx}`}>
                <PriorQuestion
                  path={[idx]}
                  node={node}
                  onAddChild={handleAddChild}
                  onSetContent={handleSetContent}
                  onDeleteChild={handleDeleteChild}
                  formController={{ register, setFocus }}
                />
              </StArticle>
            ))}
          <StAddChildButton
            type="button"
            disabled={isPrevented.addQuestion}
            onClick={() => handleAddChild([], data.answerThree.children.length, true)}>
            질문 리스트 추가
          </StAddChildButton>
          {/* 북노트 정리되면 type submit으로 바꾸기 */}
          <StSubmitButton
            type="button"
            disabled={isPrevented.isCompleted}
            onClick={submitPeriNote}
            id="btn_complete_reading">
            작성 완료
          </StSubmitButton>
        </StNoteForm>

        {openModal && (
          <StStepModalWrapper>
            <StepUpLayout onToggleModal={handlePeriCarousel} stepUpContent={periNoteStepUp} />
          </StStepModalWrapper>
        )}
        {openSubmitModal && <Complete bookData={bookData} />}
      </>
    );
  }
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
  padding: 4.6rem 0 1.6rem 2rem;
`;

const StArticle = styled.article`
  position: relative;

  margin-top: 3rem;

  &:focus-within {
    & > fieldset {
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white400};
      border-color: ${({ theme }) => theme.colors.orange100};
    }
  }
`;

const StLabelContainer = styled.div`
  display: flex;
  align-items: center;
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

  ${({ disabled }) =>
    disabled &&
    css`
      &:hover {
        cursor: default;
      }
    `}
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

  ${({ disabled }) =>
    disabled &&
    css`
      &:hover {
        cursor: default;
      }
    `}
`;
