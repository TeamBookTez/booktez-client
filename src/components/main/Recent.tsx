import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgTemp } from "../../assets/images";
import { BookCard } from "../bookcase";
import { Button } from "../common";

export default function Recent() {
  const tempBookInfo = {
    thumbnail: ImgTemp,
    title: "조화로운 부",
    authors: ["제임스 아세 러이", "령이"],
  };

  return (
    <section>
      <StHeader>
        <StHeading3>최근 작성한 북노트</StHeading3>
        <StButton>
          <Link to="/bookcase">전체보기</Link>
        </StButton>
      </StHeader>
      <StBookWrapper>
        <BookCard bookInfo={tempBookInfo} />
        <BookCard bookInfo={tempBookInfo} />
        <BookCard bookInfo={tempBookInfo} />
        <BookCard bookInfo={tempBookInfo} />
        <BookCard bookInfo={tempBookInfo} />
      </StBookWrapper>
    </section>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 4rem;
  padding-top: 6rem;
  padding-bottom: 1.4rem;
`;

const StHeading3 = styled.h3`
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StButton = styled(Button)`
  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 2.4rem;
  padding: 0.9rem 2.1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray300};
`;

const StBookWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
