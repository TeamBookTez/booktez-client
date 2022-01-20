import styled from "styled-components";

import { StepUp } from "../bookNote";
import { StepUpOnExample } from ".";
import { StBtnStepUp, StIcStepUp } from "./StepUpOnExample";

interface DetailArticleWrapperLabelingProps {
  title: string;
  handlePeriCarousel: () => void;
  children: React.ReactNode;
}

const IIIIIII = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background-color: black;
`;

export default function DetailArticleWrapperLabeling(props: DetailArticleWrapperLabelingProps) {
  const { title, handlePeriCarousel, children } = props;

  return (
    <section>
      <StTitleWrapper>
        {/* 이미지 div */}
        <IIIIIII></IIIIIII>
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
