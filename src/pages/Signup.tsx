import styled from "styled-components";

import { Logo } from "./../assets/imgs/index";

export default function SignUp() {
  return (
    <>
      <StHeader>
        <a>
          <img src={Logo} alt="홈페이지 로고 입니다. 클릭시 메인 페이지로 이동합니다" />
          <p>북스테어즈</p>
        </a>
      </StHeader>
      <StMain>
        <StArticle>
          <StStep>
            <div>1</div>
            <div></div>
            <div></div>
            <div>3</div>
            <div></div>
            <div></div>
            <div>5</div>
          </StStep>
          <h1>나만의 서재를 만드는 중이에요!</h1>
          <h2>제가 여러분을 어떻게 부르면 될까요?</h2>
          <form>
            <label></label>
            <input />
            <label></label>
            <input />
            <label></label>
            <input />
            <img alt="" />
            <p>비밀번호가 다릅니다</p>
            <button>다음 단계</button>
          </form>
        </StArticle>
      </StMain>
    </>
  );
}

const StHeader = styled.header`
  position: absolute;
  height: 9rem;
  display: flex;
  align-items: center;

  & > a {
    height: 3.6rem;
    margin-left: 2rem;

    align-items: center;
    display: flex;
  }

  & > a:hover {
    cursor: pointer;
  }

  & > a > img {
    height: 100%;
    width: auto;
    margin-right: 0.8rem;
  }

  & > a > p {
    text-align: center;

    /* 임의글꼴 */
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
  }
`;

const StMain = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StStep = styled.div`
  display: flex;
  align-items: center;

  & > div {
    background-color: ${({ theme }) => theme.colors.orange100};
  }

  & > div:nth-child(3n + 1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.3rem;
    height: 4.3rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    /* 임의 폰트 */
    font-size: 1.8rem;
  }

  & > div:not(:nth-child(3n + 1)) {
    width: 2.9rem;
    height: 0.4rem;
  }
`;
