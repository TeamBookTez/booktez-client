import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../common/styled/Button";

interface MainHeaderProps {
  children: string;
  color?: string;
}

interface StHeaderProps {
  isBookcase: string;
}

export default function MainHeader(props: MainHeaderProps) {
  const { children } = props;
  const { pathname } = useLocation();
  const isBookcase = pathname.startsWith("/bookcase") ? "0.4rem" : "3.5rem";
  const isMypage = pathname.startsWith("/my-page") ? "none" : "block";

  return (
    <StHeader isBookcase={isBookcase}>
      <h2>{children}</h2>
      <StLoginBtn isMypage={isMypage}>로그인</StLoginBtn>
    </StHeader>
  );
}

const StHeader = styled.header<StHeaderProps>`
  display: flex;
  justify-content: space-between;

  margin: 3.5rem 4rem ${(props) => props.isBookcase} 4rem;

  font-size: 3rem;
  font-weight: bold;
  line-height: 4.3rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StLoginBtn = styled(Button)<{ isMypage: string }>`
  display: ${(props) => props.isMypage};

  width: 12rem;
  height: 4.6rem;

  background-color: ${({ theme }) => theme.colors.gray100};

  border-radius: 1rem;

  // 임의 색
  color: ${({ theme }) => theme.colors.white};
`;
