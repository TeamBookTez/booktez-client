import styled from "styled-components";

import { Alert } from "../../assets/imgs";

export default function SecondStep() {
  return (
    <StArticle>
      <StStep>
        <div>1</div>
        <div></div>
        <div></div>
        <div>2</div>
        <div></div>
        <div></div>
        <div>2</div>
      </StStep>
      <h2>나만의 서재를 만드는 중이에요!</h2>
      <p>제가 여러분을 어떻게 부르면 될까요?</p>
      <StForm>
        <input type="text" id="email" placeholder="닉네임을 입력해주세요" />
        <label>
          <Alert />
          <strong>올바른 형식이 아닙니다.</strong>
        </label>
        <button>다음 계단</button>
      </StForm>
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

  & > h2 {
    margin-bottom: 3.2rem;
    /* 임의 폰트 */
    font-size: 3rem;
    font-weight: 800;
  }

  & > p {
    margin-bottom: 5.2rem;
    /* 임의 폰트 */
    font-size: 2rem;
  }
`;

const StStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5.8rem;

  // 앞에서 다섯 번째까지의 요소
  & > div:nth-child(-n + 5) {
    background-color: ${({ theme }) => theme.colors.orange100};
    color: ${({ theme }) => theme.colors.white};
  }

  // 6번째 요소와 그 이후
  & > div:nth-child(n + 6) {
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

const StForm = styled.form`
  & > input {
    width: 46.4rem;
    height: 5.4rem;
    background-color: ${({ theme }) => theme.colors.white200};
    border-radius: 1rem;
    padding-left: 2rem;

    /* 임의 폰트 */
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white500};
  }

  & > label {
    width: 100%;
    height: 1.667rem;
    margin: 1.8rem 0;
    display: flex;
  }

  & > label > svg {
    height: 100%;
    width: auto;
    margin-right: 0.567rem;
  }

  & > label > strong {
    display: table-cell;
    vertical-align: middle;
    /* 임의 폰트 */
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.red100};
  }

  & > button {
    width: 46.4rem;
    height: 5.4rem;
    background-color: ${({ theme }) => theme.colors.white400};
    border-radius: 1rem;
    margin-top: 5rem;

    /* 임의 폰트 */
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
