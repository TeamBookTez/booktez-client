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

export default function WithdrawContentComplete() {
  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>탈퇴 완료</StQuestion>
        <StPopupDetail>탈퇴 처리가 완료되었습니다.</StPopupDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={() => console.log("취소")}>
            닫기
          </StBtnCancel>
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
