import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserInfo } from "../../pages/MyPage";
import { StLoginLink } from "../common/MainHeader";
import { Button } from "../common/styled/Button";
import { TopBanner } from ".";

interface TopContentProps {
  userInfo: UserInfo;
  isLogin: boolean;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TopContent(props: TopContentProps) {
  const navigate = useNavigate();
  const { userInfo, isLogin, onImageChange } = props;

  const handleMoveLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/login");
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("booktez-token");
    localStorage.removeItem("booktez-nickname");
    navigate("/main");
  };

  return (
    <StWrapper>
      <TopBanner userInfo={userInfo} onImageChange={onImageChange} />
      {!isLogin ? (
        <StLoginButton type="button" onClick={(e) => handleMoveLogin}>
          <StLoginLink to="/login">로그인</StLoginLink>
        </StLoginButton>
      ) : (
        <StLogoutBtn onClick={handleLogout}>로그아웃</StLogoutBtn>
      )}
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 29.4rem;

  margin-bottom: 10rem;
  padding: 0 4rem;
`;

const StLoginButton = styled(Button)`
  width: 13.5rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button};
`;

const StLogoutBtn = styled(StLoginButton)`
  background-color: ${({ theme }) => theme.colors.gray300};
`;
