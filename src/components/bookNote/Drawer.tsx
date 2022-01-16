import styled from "styled-components";

import { IcBooks, IcLeftArrow } from "../../assets/icons";
import { ImgGraphic } from "../../assets/images";

export default function Drawer() {
  return (
    <DrawerWrapper>
      <IcLeftArrow />
      <StImg src={ImgGraphic} />
      <StTitleWrapper>
        <IcBooks />
        나는 왜 이 일을 하는가? 2
      </StTitleWrapper>
      <StArticle>
        <StQuestionWrapper>1. 이 책에 어떤 기대를 하고 계씬가요?</StQuestionWrapper>
        <StAnswerWrapper>상황에 따라 변하는</StAnswerWrapper>
      </StArticle>
    </DrawerWrapper>
  );
}

const DrawerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 39rem;
  height: 90rem;

  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0.17);

  padding: 3.3rem 3.1rem 5.4rem 3.5rem;

  & > svg {
    width: 4.4rem;
    height: 4.4rem;

    margin-bottom: 3.2rem;
  }
`;

const StImg = styled.img`
  width: 32.4rem;
  height: 11.9rem;

  margin-bottom: 3.8rem;
`;

const StTitleWrapper = styled.header`
  display: flex;

  ${({ theme }) => theme.fonts.header4};

  margin-bottom: 2rem;

  & > svg {
    width: 2rem;
    height: 2.1rem;

    margin-right: 0.6rem;
  }
`;

const StArticle = styled.article`
  display: flex;

  width: 32.4rem;
  height: 53.4rem;
`;

const StQuestionWrapper = styled.h2``;

const StAnswerWrapper = styled.p``;
