import styled from "styled-components";

import { ImgAddBooks } from "../../../assets/images";
import { Button } from "../../common/styled/Button";
import { StImg } from "./BookCard";

export default function AddBookCard() {
  return (
    <>
      <StAddCard>
        <StContent>
          <StImgWrapper>
            <StImg src={ImgAddBooks} alt="다음 책을 쌓아볼까요?" />
          </StImgWrapper>
          <StCardHeader>다음 책을 읽어볼까요?</StCardHeader>
          <StCardDesc>또 하나의 지혜를 쌓아보세요.</StCardDesc>
          <StAddBookBtn>+ 책 추가</StAddBookBtn>
        </StContent>
      </StAddCard>
    </>
  );
}

const StAddCard = styled.article`
  width: 24.5rem;
  height: 39.3rem;
  padding: 1.6rem 2rem;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20.5rem;
  height: 30rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white200};
`;

const StImgWrapper = styled.div`
  width: 13.6rem;
  height: 9.6rem;
  margin-bottom: 2rem;
`;

const StCardHeader = styled.h3`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.body5};

  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.7rem;

  ${({ theme }) => theme.fonts.caption};

  color: ${({ theme }) => theme.colors.gray200};
`;

const StAddBookBtn = styled(Button)`
  width: 10rem;
  height: 3.2rem;

  border-radius: 0.8rem;
`;
