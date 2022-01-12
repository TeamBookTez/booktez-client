import styled from "styled-components";

import { ImgEmptyBooks } from "../../assets/images";
import { Button } from "../common/styled/Button";

export default function NoCards() {
  return (
    <StSection>
      <StArticleWrapper>
        <StImg src={ImgEmptyBooks} alt="아직 읽은 책이 없어요" />
        <StCardHeader>아직 읽은 책이 없어요</StCardHeader>
        <StCardDesc>이정도면 좋겠니아ㅣㅏㄹ</StCardDesc>
        <StAddBookBtn>+ 책 추가</StAddBookBtn>
      </StArticleWrapper>
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 83%;
`;

const StArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const StImg = styled.img`
  margin-bottom: 1.7rem;
`;

const StCardHeader = styled.h3`
  margin-bottom: 0.9rem;

  font-size: 2.2rem;
  font-weight: 800;
  line-height: 2.86rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.8rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StAddBookBtn = styled(Button)`
  width: 13.7rem;
  height: 4.6rem;

  border-radius: 1rem;
`;
