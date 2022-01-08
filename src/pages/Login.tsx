import styled from "styled-components";

import SignupNav from "../components/login/SignupNav";

export default function Login() {
  return (
    <StPageWrapper>
      <SignupNav />
      <StMainWrapper>
        <article>
          <h1>북스테어즈 로그인</h1>
          <h3>북테에 로그인 ~~~ 더 아랓난 독서법 ~~~ 즐기세요롱 오유유</h3>
          <form>
            <label>이메일</label>
            <input placeholder="이메일을 입력해 주세요" />
            <label>비밀번호</label>
            <input placeholder="비밀번호를 입력해 주세요" />
            <button>로그인</button>
            <p>
              이메일/비밀번호를 잊어버리셨나요?
              <br />
              여기로 문의주세요.
            </p>
          </form>
        </article>
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
`;
