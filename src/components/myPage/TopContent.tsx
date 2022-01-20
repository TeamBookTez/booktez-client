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
  onLogout: () => void;
}

export default function TopContent(props: TopContentProps) {
  const navigate = useNavigate();
  const { userInfo, isLogin, onImageChange, onLogout } = props;

  const handleMoveLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("booktez-token");
    localStorage.removeItem("booktez-nickname");
    navigate("/main");
    onLogout();
  };

  return (
    <StWrapper>
      <TopBanner isLogin={isLogin} userInfo={userInfo} onImageChange={onImageChange} />
      {!isLogin ? (
        <StLoginButton type="button" onClick={handleMoveLogin}>
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
