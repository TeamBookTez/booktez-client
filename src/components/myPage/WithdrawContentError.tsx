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

// interface WithdrawContentErrorProps {}

export default function WithdrawContentError() {
  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>알림</StQuestion>
        <StPopupDetail>
          네트워크에 연결할 수 없습니다.
          <br />
          네트워크 상태확인 후 다시 시도해 주세요.
        </StPopupDetail>
        <StBtnWrapper>
          <StBtnCancel type="button">닫기</StBtnCancel>
          <StPopupBtnDelete type="button">재시도</StPopupBtnDelete>
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
  width: 9.4rem;
`;
