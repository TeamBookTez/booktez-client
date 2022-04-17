import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { isLoginState } from "../../utils/atom";
import { Button } from "./styled/Button";
import { StLoginLink } from "./styled/Link";

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
  const isLogin = useRecoilValue(isLoginState);

  // 넥제로 옮기면서 add-book이 bookcase 하위로 들어가게 되면 startswith로 쓸 수 있음
  const isBookcase = pathname === "/main/add-book" || pathname === "/main/bookcase" ? "0.4rem" : "3.5rem";
  const isMypage = pathname === "/main/my-page" || pathname === "/main/to-be" ? "none" : "block";

  return (
    <StHeader isBookcase={isBookcase}>
      <StHeading2>{children}</StHeading2>
      {isLogin ? (
        <></>
      ) : (
        <StLoginBtn isMypage={isMypage}>
          <StLoginLink to="/login">로그인</StLoginLink>
        </StLoginBtn>
      )}
    </StHeader>
  );
}

const StHeader = styled.header<StHeaderProps>`
  display: flex;
  justify-content: space-between;

  padding: 3.5rem 4rem ${(props) => props.isBookcase} 4rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StHeading2 = styled.h2`
  ${({ theme }) => theme.fonts.header0};

  z-index: 10;
`;

const StLoginBtn = styled(Button)<{ isMypage: string }>`
  display: ${(props) => props.isMypage};

  width: 12rem;
  height: 4.6rem;

  background-color: ${({ theme }) => theme.colors.gray100};

  border-radius: 1rem;

  // 임의 색
  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
`;
