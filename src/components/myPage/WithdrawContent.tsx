import { useState } from "react";
import styled from "styled-components";

import WithdrawContentComplete from "./WithdrawContentComplete";
import WithdrawContentConfirm from "./WithdrawContentConfirm";

export default function WithdrawContent() {
  const [isConfirmPopupActive, setIsConfirmPopupActive] = useState<boolean>(false);
  const [isCompletePopupActive, setIsCompletePopupActive] = useState<boolean>(false);

  const closeConfirmPopupActive = () => {
    setIsConfirmPopupActive(false);
  };

  const openCompletePopupActive = () => {
    setIsCompletePopupActive(true);
  };

  return (
    <>
      <StWithdrawText type="button" onClick={() => setIsConfirmPopupActive(true)}>
        계정 탈퇴하기
      </StWithdrawText>
      {isConfirmPopupActive && (
        <WithdrawContentConfirm
          closeConfirmPopupActive={closeConfirmPopupActive}
          openCompletePopupActive={openCompletePopupActive}
        />
      )}
      {isCompletePopupActive && <WithdrawContentComplete />}
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
