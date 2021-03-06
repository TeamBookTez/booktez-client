import { useState } from "react";
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

  const [isError, setIsError] = useState<boolean>(false);

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const withdrawUserNInformation = async () => {
    try {
      await patchUserWithdraw(userToken, "/auth/withdraw");

      localStorage.removeItem("booktez-token");
      localStorage.removeItem("booktez-nickname");
      localStorage.removeItem("booktez-email");
      openCompletePopupActive();
      closeConfirmPopupActive();
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <StPopUpWrapper>
      <StPopUpBox>
        <StQuestion>{isError ? "알림" : "탈퇴하기 전에 확인해주세요"}</StQuestion>
        <StPopupDetail>
          {isError
            ? "네트워크에 연결할 수 없습니다.\n네트워크 상태 확인 후 다시 시도해 주세요."
            : "• 저장 된 북노트 기록이 모두 사라져요\n• 30일 동안 해당 계정으로 재가입이 불가능해요"}
        </StPopupDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={closeConfirmPopupActive}>
            닫기
          </StBtnCancel>
          <StPopupBtnDelete type="button" iserror={isError} onClick={withdrawUserNInformation}>
            {isError ? "재시도" : "탈퇴하기"}
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
  margin-top: 2.6rem;

  white-space: pre-wrap;
  line-height: 2.5rem;
`;
const StPopupBtnDelete = styled(StBtnDelete)<{ iserror: boolean }>`
  width: ${({ iserror }) => (iserror ? "9.4rem" : "10.8rem")};
`;
