import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";
import SignupNav from "../components/login/SignupNav";

export default function Login() {
  return (
    <StPageWrapper>
      <SignupNav />
      <StMainWrapper>
        <StArticle>
          <h1>북스테어즈 로그인</h1>
          <h3>북테에 로그인 ~~~ 더 아랓난 독서법 ~~~ 즐기세요롱 오유유</h3>
          <LoginForm />
        </StArticle>
      </StMainWrapper>
    </StPageWrapper>
  );
}

// root에 flex?
const StPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const StMainWrapper = styled.main`
  width: 960px; //임의 px

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StArticle = styled.article`
  width: 46.4rem;
`;
