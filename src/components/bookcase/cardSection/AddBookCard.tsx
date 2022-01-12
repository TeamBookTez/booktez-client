import styled from "styled-components";

import { ImgAddBooks } from "../../../assets/images";
import { Button } from "../../common/Button";
import { StImg } from "./BookCard";

export default function AddBookCard() {
  return (
    <>
      <StAddCard>
        <StContent>
          <StImgWrapper>
            <StImg src={ImgAddBooks} alt="다음 책을 쌓아볼까요?" />
          </StImgWrapper>
          <StCardHeader>아직 읽은 책이 없어요</StCardHeader>
          <StCardDesc>이정도면 좋겠니아ㅣㅏㄹ</StCardDesc>
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

  border: 2px solid ${({ theme }) => theme.colors.white400};
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

  font-size: 1.6rem;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.7rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const StAddBookBtn = styled(Button)`
  width: 10rem;
  height: 3.2rem;

  border-radius: 0.8rem;
`;
