import styled from "styled-components";

import { LandingCardProps } from "./LandingCard";

export default function MobileLandingCard(props: LandingCardProps) {
  const { title, subTitle, children } = props;

  return (
    <StCard>
      {children}
      <div>
        <StH3>{title}</StH3>
        <StSubtitle>{subTitle}</StSubtitle>
      </div>
    </StCard>
  );
}

const StCard = styled.article`
  justify-content: normal;

  width: 32rem;

  border-radius: 0;
  box-shadow: 0;
  padding: 6.4rem 4.4rem 0 4.4rem;
  background-color: ${({ theme }) => theme.colors.white200};

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.fonts.body4}
  white-space: pre-wrap;

  & > svg {
    margin-bottom: 2.4rem;
  }
`;

const StH3 = styled.h3`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.h4};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StSubtitle = styled.p`
  width: 23rem;

  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.colors.gray300};
`;
