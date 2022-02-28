import styled, { css } from "styled-components";

interface LandingCardProps {
  title: string;
  subTitle: string;
  isMobileScreen: boolean;
  children: React.SVGProps<SVGSVGElement>;
}

export default function LandingCard(props: LandingCardProps) {
  const { title, subTitle, isMobileScreen, children } = props;

  return (
    <StCard isMobileScreen={isMobileScreen}>
      {children}
      <div>
        <StH3 isMobileScreen={isMobileScreen}>{title}</StH3>
        <StSubtitle isMobileScreen={isMobileScreen}>{subTitle}</StSubtitle>
      </div>
    </StCard>
  );
}

const StCard = styled.article<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          justify-content: normal;

          width: 32rem;

          border-radius: 0;
          box-shadow: 0;
          padding: 6.4rem 4.4rem 0 4.4rem;
          background-color: ${({ theme }) => theme.colors.white200};
        `
      : css`
          justify-content: space-between;

          width: 38.8rem;
          height: 34.8rem;

          border-radius: 0.8rem;
          box-shadow: 0px 6px 10px 8px rgba(45, 45, 45, 0.04);
          padding: 4rem 3.5rem 6.4rem 2.8rem;
        `}
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.fonts.body4}
  white-space: pre-wrap;

  & > svg {
    margin-bottom: 2.4rem;
    /* margin-bottom: 9.4rem;
    margin-left: 0.7rem; */
  }
`;

const StH3 = styled.h3<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          ${({ theme }) => theme.fonts.h4};
          margin-bottom: 0.8rem;
        `
      : css`
          ${({ theme }) => theme.fonts.header3};
          margin-bottom: 2.2rem;
        `}

  color: ${({ theme }) => theme.colors.gray100};
`;

const StSubtitle = styled.p<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          width: 23rem;

          ${({ theme }) => theme.fonts.Body2}
          color: ${({ theme }) => theme.colors.gray300};
        `
      : css`
          width: 32.5rem;
        `}
`;
