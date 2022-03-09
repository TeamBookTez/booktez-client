import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useSWRConfig } from "swr";

import { UserInfo } from "../../pages/MyPage";
import { isLoginState } from "../../utils/atom";
import { StLoginLink } from "../common/MainHeader";
import { Button } from "../common/styled/Button";
import { TopBanner } from ".";

interface TopContentProps {
  userInfo: UserInfo;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogout: () => void;
}

export default function TopContent(props: TopContentProps) {
  const navigate = useNavigate();
  const { userInfo, onImageChange, onLogout } = props;

  const isLogin = useRecoilValue(isLoginState);
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
      <TopBanner userInfo={userInfo} onImageChange={onImageChange} />
      {isLogin ? (
        <StLogoutBtn onClick={handleLogout} id="btn_logout">
          로그아웃
        </StLogoutBtn>
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
