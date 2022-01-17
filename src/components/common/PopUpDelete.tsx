import styled from "styled-components";

import { StModalWrapper } from "../addBook/ModalWrapper";
import { Button } from ".";

const StTemp = styled.div`
  width: 100%;
  height: 16.1rem;
`;

export default function PopUpLayout() {
  return (
    <StPopUpWrpper>
      <StPopUp>
        {/* 일러스트 div */}
        <StTemp></StTemp>
        <StQuestion>삭제하시겠어요?</StQuestion>
        <StDetail>삭제한 기록은 복구가 어려워요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button">취소</StBtnCancel>
          <StBtnDelete type="button">삭제</StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrpper>
  );
}

const StPopUpWrpper = styled(StModalWrapper)`
  background-color: rgba(55, 56, 62, 0.9);
`;

const StPopUp = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 43.5rem;
  height: 35.2rem;

  border-radius: 2.1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const StQuestion = styled.p`
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StDetail = styled.p`
  margin-top: 1.2rem;

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray400};
`;

const StBtnWrapper = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 3rem;

  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

const StBtnCancel = styled(Button)`
  width: 8rem;
  height: 4.6rem;

  margin-right: 1.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const StBtnDelete = styled(Button)`
  width: 8rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange100};
`;
