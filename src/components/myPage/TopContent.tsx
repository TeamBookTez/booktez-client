import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { UserInfo } from "../../pages/MyPage";
import { getData } from "../../utils/lib/api";
import { StLoginLink } from "../common/MainHeader";
import { Button } from "../common/styled/Button";
import { TopBanner } from ".";

interface TopContentProps {
  userInfo: UserInfo;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TopContent(props: TopContentProps) {
  const { userInfo, onImageChange } = props;

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
    <StWrapper>
      <TopBanner userInfo={userInfo} onImageChange={onImageChange} />
      {!isLogin ? (
        <StLoginButton type="button">
          <StLoginLink to="/login">로그인</StLoginLink>
        </StLoginButton>
      ) : (
        <StLogoutBtn>로그아웃</StLogoutBtn>
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
