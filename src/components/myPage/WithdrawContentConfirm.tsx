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

export default function WithdrawContentConfirm() {
  return (
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
  );
}

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
