import { useCallback, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { PeriNoteData, PreNoteData } from "../../../pages/BookNote";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { useGetPeriNote } from "../../../utils/lib/bookNote";
import { deepCopyTree, getNodeByPath } from "../../../utils/tree";
import { Loading } from "../../common";
import { Button } from "../../common/styled/Button";
import { ExButton, PeriModal, PriorQuestion, StepUp } from "..";
import { StStepModalWrapper } from "../preNote/PreNoteForm";

export default function PeriNote() {
  const [isLogin, reviewId, userToken, initIndex, isSave, handleOpenDrawer, handleCloseDrawer, saveReview] =
    useOutletContext<
      [
        boolean,
        number,
        string,
        number,
        boolean,
        (i: number) => void,
        () => void,
        (body: PreNoteData | PeriNoteData) => Promise<void>,
      ]
    >();

  const [periNote, isLoading] = useGetPeriNote(userToken, `/review/${reviewId}/peri`);

  const [root, setRoot] = useState<PeriNoteTreeNode>({ type: "ROOT", content: "root", children: [] });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAddChild = (path: number[], isQuestion: boolean) => {
    // 깊은 복사 후 위치를 찾아 새로운 node를 추가하고 root를 set에 넘김
    const newRoot = deepCopyTree(root);
    const current = getNodeByPath(newRoot, path);

    if (isQuestion) {
      // 꼬리 질문 추가 시에는 답변이 함께 생성되어야 함
      current.children.push(
        {
          type: "question",
          content: "",
          children: [],
        },
        {
          type: "answer",
          content: "",
          children: [],
        },
      );
    } else {
      // 답변의 경우에는 부모에게 자식을 추가해야 함 - 질문과 같은 피어에 두기 위해서
      const parent = getNodeByPath(newRoot, path.slice(0, -1));
      const currentIndex = path[path.length - 1];
      const parentLength = parent.children.length;
      // 가장 마지막 질문에 답변이 없는데, 답변을 추가하려는 경우 가장 마지막에 달려야 함
      let targetIndex = parentLength;

      for (let i = currentIndex + 1; i < parentLength; i++) {
        // 다음 질문의 바로 앞에 추가
        if (parent.children[i].type === "question") {
          targetIndex = i;
          break;
        }

        // 가장 끝에 추가
        if (i === parentLength - 1) {
          targetIndex = parentLength;
        }
      }

      parent.children.splice(targetIndex, 0, {
        type: "answer",
        content: "",
        children: [],
      });
    }

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

  function toggleMenu(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    const targetElement = e.target as HTMLElement;

    if (!targetElement.closest(".icn_more")) {
      const element = document.querySelector(".open") as HTMLElement;

      element.style.display = "none";
      element.classList.remove("open");

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

  useEffect(() => {
    setRoot(periNote.answerThree);
  }, [periNote]);

  useEffect(() => {
    if (initIndex && isSave) {
      saveReview({ answerThree: root, reviewSt: periNote.reviewSt });
    }
  }, [isSave]);

  useEffect(() => {
    // unmount될 때 drawer 닫기
    return handleCloseDrawer;
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <StNoteForm onClick={toggleMenu}>
        <StLabelWrapper>
          <StLabelContainer>
            <StLabel>질문 리스트를 구조화하며 책을 읽어보세요.</StLabel>
            <StepUp onToggleModal={handlePeriCarousel} />
          </StLabelContainer>
          <ExButton idx={4} onOpenDrawer={handleOpenDrawer} />
        </StLabelWrapper>
        {root.children &&
          root.children.map((node, idx) => (
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
  padding: 4.6rem 0 1.6rem 2rem;
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
