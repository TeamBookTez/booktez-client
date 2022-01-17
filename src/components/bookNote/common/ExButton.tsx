import styled from "styled-components";

import { IcRightArrow } from "../../../assets/icons";

export default function ExButton() {
  return (
    <StButton type="button">
      예시
      <StIcon />
    </StButton>
  );
}

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.8rem;
  padding: 1.05rem 2.1rem;
  background-color: ${({ theme }) => theme.colors.white300};

  width: 8.7rem;
  height: 4.2rem;

  ${({ theme }) => theme.fonts.body5}
`;

const StIcon = styled(IcRightArrow)`
  width: 0.6rem;
  height: 1.2rem;
`;
