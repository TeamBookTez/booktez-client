import axios from "axios";
import styled from "styled-components";

import { patchUserWithdraw } from "../../utils/lib/api";
import {
  StBtnCancel,
  StBtnDelete,
  StBtnWrapper,
  StDetail,
  StPopUp,
  StPopUpWrapper,
  StQuestion,
} from "../common/styled/PopUp";

interface WithdrawContentConfirmProps {
  closeConfirmPopupActive: () => void;
  openErrorPopupActive: () => void;
  openCompletePopupActive: () => void;
}

export default function WithdrawContentConfirm(props: WithdrawContentConfirmProps) {
  const { closeConfirmPopupActive, openErrorPopupActive, openCompletePopupActive } = props;

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const withdrawUserNInformation = async () => {
    try {
      await patchUserWithdraw(userToken, "/auth/withdraw");

      openCompletePopupActive();
    } catch (err) {
      openErrorPopupActive();
    } finally {
      closeConfirmPopupActive();
    }
  };

  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>탈퇴하기 전에 확인해주세요</StQuestion>
        <StPopupDetail>• 저장 된 북노트 기록이 모 사라져요</StPopupDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={closeConfirmPopupActive}>
            닫기
          </StBtnCancel>
          <StPopupBtnDelete type="button" onClick={withdrawUserNInformation}>
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
