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
  openCompletePopupActive: () => void;
}

export default function WithdrawContentConfirm(props: WithdrawContentConfirmProps) {
  const { closeConfirmPopupActive, openCompletePopupActive } = props;

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const withdrawUserNInformation = async () => {
    try {
      await patchUserWithdraw(userToken, "/auth/withdraw");

      openCompletePopupActive();
    } catch (err) {
      // 기디팀에서 에러 처리 따로 안 한다면 코드 삭제
      if (axios.isAxiosError(err)) {
        const status = err.response?.data.status;

        if (status === 400) {
          window.alert("이미 탈퇴된 회원입니다.");
        } else {
          window.alert("회원 탈퇴에 실패하였습니다.");
        }
      }
    } finally {
      closeConfirmPopupActive();
    }
  };

  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>탈퇴하기 전에 확인해주세요</StQuestion>
        <StPopupDetail>• 저장 된 북노트 기록이 모두 사라져요</StPopupDetail>
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
