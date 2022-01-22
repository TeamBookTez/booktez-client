import styled from "styled-components";

import { IcDetail } from "../../assets/icons";
import { StepUp } from "../bookNote";

interface DetailArticleWrapperLabelingProps {
  title: string;
  handlePeriCarousel: () => void;
  children: React.ReactNode;
}

export default function DetailArticleWrapperLabeling(props: DetailArticleWrapperLabelingProps) {
  const { title, handlePeriCarousel, children } = props;

  return (
    <section>
      <StTitleWrapper>
        {/* 이미지 div */}
        <IcDetail />
        <StTitle>{title}</StTitle>
        <StepUp onToggleModal={handlePeriCarousel} />
      </StTitleWrapper>
      {children}
    </section>
  );
}

const StTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StTitle = styled.h3`
  margin-left: 0.5rem;

  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray100};
`;
