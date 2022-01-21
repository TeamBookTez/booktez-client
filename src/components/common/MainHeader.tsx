import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { getData } from "../../utils/lib/api";
import { Button } from "./styled/Button";
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

  const isBookcase = pathname.startsWith("/main/bookcase") ? "0.4rem" : "3.5rem";
  const isMypage = pathname === "/main/my-page" || pathname === "/main/to-be" ? "none" : "block";

  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        setIsLogin(false);
      }
      if (!(status === 200)) {
        setIsLogin(false);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

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

  margin: 3.5rem 4rem ${(props) => props.isBookcase} 4rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StHeading2 = styled.h2`
  ${({ theme }) => theme.fonts.header0}
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

export const StLoginLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
