import styled from "styled-components";

import {
  StBtnCancel,
  StBtnDelete,
  StBtnWrapper,
  StDetail,
  StPopUp,
  StPopUpWrapper,
  StQuestion,
} from "../common/styled/PopUp";

export default function WithdrawContent() {
  return (
    <>
      <StWithdrawText type="button">계정 탈퇴하기</StWithdrawText>
      <StPopUpWrapper>
        <StPopUpBox>
          <StQuestion>탈퇴하기 전에 확인해주세요</StQuestion>
          <StPopupDetail>• 저장 된 북노트 기록이 모두 사라져요</StPopupDetail>
          <StBtnWrapper>
            <StBtnCancel type="button" onClick={() => console.log("취소")}>
              닫기
            </StBtnCancel>
            <StPopupBtnDelete type="button" onClick={() => console.log("다음")}>
              탈퇴하기
            </StPopupBtnDelete>
          </StBtnWrapper>
        </StPopUpBox>
      </StPopUpWrapper>
    </>
  );
}

const StWithdrawText = styled.button`
  position: absolute;
  bottom: -3.7rem; // 1.6rem 아래 + 2.1rem 높이
  right: 4rem;

  width: 13.5rem;
  height: 2.1rem;

  text-align: center;
  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.white500}
`;

const StPopUpBox = styled(StPopUp)`
  height: 24.2rem;

  align-items: start;
`;
const StPopupDetail = styled(StDetail)`
  margin-top: 3.2rem;
`;
const StPopupBtnDelete = styled(StBtnDelete)`
  width: 10.8rem;
`;
