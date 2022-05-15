import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useSWRConfig } from "swr";

import { UserInfo } from "../../pages/MyPage";
import { isLoginState } from "../../utils/atom";
import { Button } from "../common/styled/Button";
import { StLoginLink } from "../common/styled/Link";
import { TopBanner } from ".";

interface UserContentProps {
  userInfo: UserInfo;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserContent(props: UserContentProps) {
  const navigate = useNavigate();
  const { userInfo, onImageChange } = props;

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const { mutate } = useSWRConfig();

  const handleLogout = () => {
    localStorage.removeItem("booktez-token");
    localStorage.removeItem("booktez-nickname");
    localStorage.removeItem("booktez-email");
    mutate("/book");
    setIsLogin(false);
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
