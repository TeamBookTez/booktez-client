/*
마지막 편집자: 22-05-10 joohaem
변경사항 및 참고:
  - component/main/RecentBooks 컴포넌트에서도 쓰이는 Empty 컴포넌트라서,
    `navIndex` 라는 변수명이 조금 걸리네요! 하하
    
고민점:
  - 
*/

import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgEmptyBook } from "../../../assets/images";
import { Button } from "../../common/styled/Button";

interface EmptyProps {
  navIndex: number;
}

export default function Empty(props: EmptyProps) {
  const { navIndex } = props;

  const allOrPre = navIndex <= 1;

  return (
    <StArticle>
      <StImg src={ImgEmptyBook} alt="빈 폴더 이미지" />
      <StH3>{allOrPre ? "아직 읽은 책이 없어요." : "이 단계의 책이 없어요."}</StH3>

      <StParagraph>
        북스테어즈만의 독서법을 통해
        <br /> 지식을 얻고 독서의 매력을 느껴보세요
      </StParagraph>
      {allOrPre && (
        <StAddBookBtn>
          <StLink to="/main/add-book">+ 책 추가</StLink>
        </StAddBookBtn>
      )}
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 32.7rem;
`;

const StImg = styled.img`
  width: 28.4rem
  height: 16.6rem;

  margin-bottom: 1.1rem;
`;

const StH3 = styled.h3`
  ${({ theme }) => theme.fonts.header3}

  margin-bottom: 1rem;
`;

const StParagraph = styled.p`
  text-align: center;

  margin-bottom: 2.4rem;
  ${({ theme }) => theme.fonts.body6}
`;

const StAddBookBtn = styled(Button)`
  width: 13.7rem;
  height: 4.6rem;

  ${({ theme }) => theme.fonts.button}
  border-radius: 1rem;
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
