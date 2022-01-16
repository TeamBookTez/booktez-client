import React, { useState } from "react";
import styled from "styled-components";

interface BooksNumProps {
  booksNum: number;
}

export default function BookComment(props: BooksNumProps) {
  const { booksNum } = props;
  const [nowComment, setNowComment] = useState<string>("지금까지");

  return (
    <StWrapper>
      {booksNum < 10 ? <StNowcomment>{nowComment}</StNowcomment> : null}
      <StReadcomment>
        권{booksNum < 10 ? <>&nbsp;</> : <>의&nbsp;</>}
        {10 <= booksNum && booksNum < 100 ? <br /> : null}
        책을 읽었어요
      </StReadcomment>
    </StWrapper>
  );
}

const StWrapper = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.fonts.body0};
  color: ${({ theme }) => theme.colors.gray200};

  & > span {
    ${({ theme }) => theme.fonts.header4};
  }
`;

const StNowcomment = styled.span``;
const StReadcomment = styled.span``;
