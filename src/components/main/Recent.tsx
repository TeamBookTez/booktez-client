import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgTemp } from "../../assets/images";
import { BookCard } from "../bookcase";
import Empty from "../bookcase/cardSection/Empty";
import { Button } from "../common/styled/Button";

interface TempBookInfo {
  author: string[];
  reviewId: number;
  thumbnail: string;
  title: string;
}

export default function Recent() {
  const tempBookInfo = {
    thumbnail: ImgTemp,
    reviewId: 6789,
    title: "석상한 귬",
    author: ["제임스 아세 함이", "령이"],
  };

  // 로그인 여부 맞춰서 아래 isDefault를 조작
  const isDefault = true;

  const tempBookList: TempBookInfo[] = [tempBookInfo, tempBookInfo, tempBookInfo, tempBookInfo, tempBookInfo];

  return (
    <section>
      <StHeader>
        <StHeading3>최근 작성한 북노트</StHeading3>
        {!isDefault ? (
          <StButton type="button">
            <Link to="/main/bookcase">전체보기</Link>
          </StButton>
        ) : null}
      </StHeader>
      <StBookWrapper isdefault={isDefault}>
        {isDefault ? <Empty /> : tempBookList.map((tempInfo, idx) => <BookCard key={idx} bookcaseInfo={tempInfo} />)}
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

const StBookWrapper = styled.section<{ isdefault: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isdefault }) => (isdefault ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;
