import styled, { css } from "styled-components";

export interface LandingCardProps {
  title: string;
  subTitle: string;
  children: React.SVGProps<SVGSVGElement>;
}

export default function LandingCard(props: LandingCardProps) {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 38.8rem;
  height: 34.8rem;

  border-radius: 0.8rem;
  box-shadow: 0px 6px 10px 8px rgba(45, 45, 45, 0.04);
  padding: 4rem 3.5rem 6.4rem 2.8rem;

  ${({ theme }) => theme.fonts.body4}
  white-space: pre-wrap;

  & > svg {
    margin-bottom: 9.4rem;
    margin-left: 0.7rem;
  }
`;

const StH3 = styled.h3`
  margin-bottom: 2.2rem;

  ${({ theme }) => theme.fonts.header3};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StSubtitle = styled.p`
  width: 32.5rem;
`;
