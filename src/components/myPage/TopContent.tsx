import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSWRConfig } from "swr";

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

  const { mutate } = useSWRConfig();

  const handleLogout = () => {
    localStorage.removeItem("booktez-token");
    localStorage.removeItem("booktez-nickname");
    localStorage.removeItem("booktez-email");
    mutate("/book");
    onLogout();
    navigate("/main");
  };

  return (
    <StWrapper>
      <TopBanner isLogin={isLogin} userInfo={userInfo} onImageChange={onImageChange} />
      {isLogin ? (
        <StLogoutBtn onClick={handleLogout}>로그아웃</StLogoutBtn>
      ) : (
        <StLoginButton type="button">
          <StLoginLink to="/login">로그인</StLoginLink>
        </StLoginButton>
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
