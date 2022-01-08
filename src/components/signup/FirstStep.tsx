import styled from "styled-components";

export default function FirstStep() {
  return (
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
      <h2>당신의 이메일을 입력해 주세요.</h2>
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
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > h1 {
    margin-bottom: 3.2rem;
    /* 임의 폰트 */
    font-size: 3rem;
    font-weight: 800;
  }

  & > h2 {
  }
`;

const StStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5.8rem;

  // 앞에서 두 번째까지의 요소
  & > div:nth-child(-n + 2) {
    background-color: ${({ theme }) => theme.colors.orange100};
    color: ${({ theme }) => theme.colors.white};
  }

  // 3번째 요소와 그 이후
  & > div:nth-child(n + 3) {
    background-color: ${({ theme }) => theme.colors.white200};
    color: ${({ theme }) => theme.colors.gray200};
  }

  & > div:nth-child(3n + 1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;

    /* 임의 폰트 */
    font-size: 1.8rem;
    font-weight: 700;
  }

  & > div:not(:nth-child(3n + 1)) {
    width: 2.9rem;
    height: 0.4rem;
  }
`;
