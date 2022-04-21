import styled from "styled-components";

import WithdrawContentComplete from "./WithdrawContentComplete";
import WithdrawContentConfirm from "./WithdrawContentConfirm";

export default function WithdrawContent() {
  return (
    <>
      <StWithdrawText type="button">계정 탈퇴하기</StWithdrawText>
      {/* <WithdrawContentConfirm /> */}
      <WithdrawContentComplete />
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
