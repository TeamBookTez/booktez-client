import styled from "styled-components";

import { IcCheck } from "../../assets/icons";

export default function StepUpOnExample() {
  return (
    <StBtnStepUp type="button">
      <StIcStepUp />
      Step Up
    </StBtnStepUp>
  );
}

const StBtnStepUp = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem 0.6rem 0.7rem;
  background-color: ${({ theme }) => theme.colors.orange200};

  width: 9rem;
  height: 3.1rem;

  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.orange100};
`;

const StIcStepUp = styled(IcCheck)`
  width: 2rem;
  height: 2rem;
`;
