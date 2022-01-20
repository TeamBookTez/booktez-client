import styled from "styled-components";

interface LandingCardProps {
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
        <StH4>{title}</StH4>
        <StSubtitle>{subTitle}</StSubtitle>
      </div>
    </StCard>
  );
}

const StCard = styled.article`
  disstsubtitlelay: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0.8rem;
  box-shadow: 0px 6px 10px 8px rgba(45, 45, 45, 0.04);

  padding: 4rem 3.5rem 6.4rem 2.8rem;

  width: 38.8rem;
  height: 34.8rem;

  ${({ theme }) => theme.fonts.body4}
  white-space: pre-wrap;

  & > svg {
    width: 4.5rem;
    height: 4.5rem;
    margin-left: 0.7rem;

    margin-bottom: 9.4rem;
  }
`;

const StH4 = styled.h4`
  margin-bottom: 2.2rem;
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StSubtitle = styled.p`
  width: 32.5rem;
`;
