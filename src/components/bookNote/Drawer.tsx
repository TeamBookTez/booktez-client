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
        <StAnswerWrapper>
          상황에 따라 변하는 동기를 한 곳에 잡아 두고 싶고, 앞으로의 진행될 모든 업무에 대해 내가 이 일을 왜 하는지
          명확하게 할 수 있는 힌트를 얻을 수 있다고 기대하고 있다.
        </StAnswerWrapper>
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

  padding: 3.3rem 3.3rem 5.4rem 3.3rem;

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

  border-radius: 1.6rem;
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
  flex-direction: column;

  width: 32.4rem;
  height: 53.4rem;

  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.white200};

  box-shadow: 0 0 1.8rem 0.9rem rgba(117, 106, 90, 0.09);
  border-radius: 2rem;
`;

const StQuestionWrapper = styled.h2`
  ${({ theme }) => theme.fonts.body1}

  margin-bottom: 1.7rem;
`;

const StAnswerWrapper = styled.p`
  display: flex;

  ${({ theme }) => theme.fonts.body4};

  border-top: 0.1rem solid ${({ theme }) => theme.colors.white400};
  padding-top: 1.7rem;
`;
