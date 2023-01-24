import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StBtnCancel, StBtnWrapper, StDetail, StPopUp, StPopUpWrapper, StQuestion } from "../common/styled/PopUp";

export default function WithdrawContentComplete() {
  const navigation = useNavigate();

  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>탈퇴 완료</StQuestion>
        <StPopupDetail>
          {"탈퇴 처리가 완료되었습니다.\n복구를 원하시면 북스테어즈로 문의하시길 바랍니다."}
        </StPopupDetail>
        <StBtnWrapper>
          <StSoloBtnCancel type="button" onClick={() => navigation("/main")}>
            닫기
          </StSoloBtnCancel>
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
  margin-top: 2.6rem;

  white-space: pre-wrap;
  line-height: 2.5rem;
`;

const StSoloBtnCancel = styled(StBtnCancel)`
  margin-right: 0;
`;
