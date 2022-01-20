import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { PreNoteData } from "../../../pages/BookNote";
import { Button } from "../../common/styled/Button";
import { PreNoteForm, QuestionThree } from "..";

export default function PreNote() {
  const navigate = useNavigate();
  const [isLogin, handleToggleDrawer, preNote, handleChangeReview, setOpenModal, isPrevented, ablePatch] =
    useOutletContext<
      [
        boolean,
        (i: number) => void,
        PreNoteData,
        (key: string, value: string | string[] | number) => void,
        React.Dispatch<React.SetStateAction<boolean>>,
        boolean,
        boolean,
      ]
    >();
  const { answerOne, answerTwo, questionList } = preNote;

  const onChangeReview = (key: string, value: string | string[] | number): void => {
    handleChangeReview(key, value);
  };

  const handleSubmit = () => {
    setOpenModal(true);
  };

  const handleGoSignup = () => {
    navigate("/signup", { state: "rightpath" });
  };

  return (
    <StNoteForm onSubmit={(e) => e.preventDefault()}>
      <StFormHead>독서 전 단계 어쩌구 해보세요</StFormHead>
      <StFormWrapper>
        <PreNoteForm
          question="익명의 독서가(비회원)/000님은 이 책에 어떤 기대를 하고 계신가요?"
          idx={1}
          onToggleDrawer={handleToggleDrawer}>
          <StTextarea
            placeholder="답변을 입력해주세요."
            value={answerOne}
            onChange={(e) => onChangeReview("answerOne", e.target.value)}
          />
        </PreNoteForm>
        <PreNoteForm
          question="이 책의 핵심 메시지는 무엇일까요? 그 중 어느 부분들이 기대를 만족시킬 수 있을까요? "
          idx={2}
          onToggleDrawer={handleToggleDrawer}>
          <StTextarea
            placeholder="답변을 입력해주세요."
            value={answerTwo}
            onChange={(e) => onChangeReview("answerTwo", e.target.value)}
          />
        </PreNoteForm>
        {isLogin ? (
          <QuestionThree
            questionList={questionList}
            onChangeReview={onChangeReview}
            onToggleDrawer={handleToggleDrawer}
            isPrevented={isPrevented}
          />
        ) : (
          <StLinkWrapper>
            <StSignupText>
              독서가들의 기대를 채워줄 책의 내용들은
              <br />
              어떻게 구체화 되어갈까요?
            </StSignupText>
            <StButton onClick={handleGoSignup}>회원가입 후 이어보기</StButton>
          </StLinkWrapper>
        )}
      </StFormWrapper>

      {/* 모든 내용이 채워졌을 때 버튼이 활성화되도록 하기 */}
      <StNextBtn type="button" disabled={!ablePatch} onClick={handleSubmit} isdisabled={!ablePatch}>
        다음 계단
      </StNextBtn>
    </StNoteForm>
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
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
    ${({ theme }) => theme.fonts.body4}
  }
`;

const StNextBtn = styled(Button)<{ isdisabled: boolean }>`
  margin-top: 10rem;
  padding: 1.6rem 13rem;
  border-radius: 1rem;
  background-color: ${({ isdisabled, theme }) => (isdisabled ? theme.colors.white400 : theme.colors.orange100)};

  width: 32.5rem;
  color: ${({ isdisabled, theme }) => (isdisabled ? theme.colors.gray300 : theme.colors.white)};
  ${({ theme }) => theme.fonts.button};
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
