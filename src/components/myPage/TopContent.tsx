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
  handleIsLogin: () => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TopContent(props: TopContentProps) {
  const navigate = useNavigate();
  const { userInfo, isLogin, handleIsLogin, onImageChange } = props;

  const handleMoveLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/login");
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("booktez-token");
    localStorage.removeItem("booktez-nickname");
    handleIsLogin();
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
  height: 34.2rem; // 임시

  margin-bottom: 5.3rem;
  padding: 0 4rem;
`;

const StLoginButton = styled(Button)`
  height: 4.6rem;

  padding: 0 3.75rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button2};
`;

const StLogoutBtn = styled(StLoginButton)`
  background-color: ${({ theme }) => theme.colors.gray300};
`;
