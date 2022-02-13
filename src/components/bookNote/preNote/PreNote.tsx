import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { PeriNoteData, PreNoteData } from "../../../pages/BookNote";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { patchBookNote, useGetPreNote } from "../../../utils/lib/bookNote";
import { Loading } from "../../common";
import { Button } from "../../common/styled/Button";
import { PopUpPreDone, PreNoteForm, QuestionThree } from "..";

export default function PreNote() {
  const [
    isLogin,
    reviewId,
    userToken,
    initIndex,
    isSave,
    handleOpenDrawer,
    handleCloseDrawer,
    saveReview,
    isPrevented,
    handlePrevent,
  ] =
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
        boolean,
        (shouldPrevent: boolean) => void,
      ]
    >();

  const [preNote, isLoading] = useGetPreNote(userToken, `/review/${reviewId}/pre`);
  const { answerOne, answerTwo, questionList, reviewSt } = preNote;

  const [isFilled, setIsFilled] = useState<boolean>(false);

  // patch를 위한 state
  // 서버 상태 관리를 도입한다면 이 부분도 중복 줄이기
  const [patchNote, setPatchNote] = useState<PreNoteData>({ answerOne, answerTwo, questionList, reviewSt });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const localNick = localStorage.getItem("booktez-nickname");
  const nickname = isLogin && localNick ? localNick : "익명의 독서가";

  const handleChangeReview = (key: string, value: string | string[] | number): void => {
    setPatchNote((currentNote) => {
      const newData = { ...currentNote };

      newData[key] = value;

      return newData;
    });
  };

  // 독서 중으로 넘어가기 - 모달 내 '다음' 버튼 - 수정 완료
  const handleSubmit = async () => {
    handleChangeReview("reviewSt", 3);
    patchBookNote(userToken, `/review/${reviewId}/pre`, { ...patchNote, reviewSt: 3 });

    if (reviewSt === 2) {
      const questionFromPre: PeriNoteTreeNode[] = [];

      patchNote.questionList.map((content) => {
        questionFromPre.push({ type: "question", content, children: [] });
        questionFromPre.push({ type: "answer", content: "", children: [] });
      });
      patchBookNote(userToken, `review/${reviewId}/peri`, {
        answerThree: {
          type: "Root",
          content: "root",
          children: questionFromPre,
        },
        reviewSt: 3,
      });
    }

    handlePrevent(false);

    // 현재 모달 닫기
    setOpenModal(false);

    // peri로 넘어가기
    navigate("/book-note/peri", { state: { isLogin, reviewId, fromUrl: "" } });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };

  const handleGoSignup = () => {
    localStorage.setItem("booktez-reviewData", JSON.stringify({ answerOne, answerTwo }));
    navigate("/signup", { state: "rightpath" });
  };

  useEffect(() => {
    setPatchNote({ answerOne, answerTwo, questionList, reviewSt });

    if (reviewSt > 2) {
      handlePrevent(false);
      setIsFilled(true);
    }
  }, [preNote]);

  useEffect(() => {
    if (!initIndex && isSave) {
      saveReview(patchNote);
    }
  }, [isSave]);

  useEffect(() => {
    if (patchNote.answerOne && patchNote.answerTwo && !patchNote.questionList.includes("")) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [patchNote]);

  useEffect(() => {
    // unmount될 때 drawer 닫기
    return handleCloseDrawer;
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <StNoteForm onSubmit={(e) => e.preventDefault()}>
        <StFormHead>책을 넘기기 전 독서전략을 세워보아요.</StFormHead>
        <StFormWrapper>
          <PreNoteForm
            question={`${nickname}님은 이 책에 어떤 기대를 하고 계신가요?`}
            idx={1}
            onOpenDrawer={handleOpenDrawer}>
            <StTextarea
              placeholder="답변을 입력해주세요."
              value={patchNote.answerOne}
              onChange={(e) => handleChangeReview("answerOne", e.target.value)}
            />
          </PreNoteForm>
          <PreNoteForm
            question="이 책의 핵심 메시지는 무엇일까요? 그 중 어느 부분들이 기대를 만족시킬 수 있을까요? "
            idx={2}
            onOpenDrawer={handleOpenDrawer}>
            <StTextarea
              placeholder="답변을 입력해주세요."
              value={patchNote.answerTwo}
              onChange={(e) => handleChangeReview("answerTwo", e.target.value)}
            />
          </PreNoteForm>
          {isLogin ? (
            <QuestionThree
              questionList={patchNote.questionList}
              onChangeReview={handleChangeReview}
              onOpenDrawer={handleOpenDrawer}
              isPrevented={isPrevented}
              isFilled={isFilled}
            />
          ) : (
            <StLinkWrapper>
              <StSignupText>
                내 기대를 채워줄 책의 내용들은
                <br />
                앞으로 어떻게 구체화 될까요?
              </StSignupText>
              <StButton onClick={handleGoSignup}>회원가입 후 이어보기</StButton>
            </StLinkWrapper>
          )}
        </StFormWrapper>

        {/* 모든 내용이 채워졌을 때 버튼이 활성화되도록 하기 */}
        <StNextBtn type="button" disabled={!isFilled} onClick={handleOpenModal}>
          다음 계단
        </StNextBtn>
      </StNoteForm>

      {openModal && <PopUpPreDone onSubmit={handleSubmit} onCancel={handleCancelModal} />}
    </>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-height: fit-content;
`;

const StFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12.8rem;

  width: 100%;
`;

const StFormHead = styled.h2`
  padding: 4.5rem 0 4.5rem 2rem;
  width: 100%;

  ${({ theme }) => theme.fonts.header3};
`;

const StTextarea = styled.textarea`
  border: none;
  width: 100%;
  height: 15.4rem;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.body4}
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
    ${({ theme }) => theme.fonts.body4}
  }
`;

const StNextBtn = styled(Button)<{ disabled: boolean }>`
  margin-top: 10rem;
  padding: 1.6rem 13rem;
  border-radius: 1rem;
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.white400 : theme.colors.orange100)};

  width: 32.5rem;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.gray300 : theme.colors.white)};
  ${({ theme }) => theme.fonts.button};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;

const StLinkWrapper = styled.section`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 25.9rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -9.07%, rgba(194, 195, 204, 0.85) 100%);
`;

const StSignupText = styled.p`
  text-align: center;

  ${({ theme }) => theme.fonts.body0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StButton = styled(Button)`
  width: 32.5rem;
  height: 5.6rem;

  margin-top: 1.2rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
