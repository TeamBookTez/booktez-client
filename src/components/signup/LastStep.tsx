import styled from "styled-components";

export default function LastStep() {
  return (
    <StArticle>
      <h1>OOOOOOOOOOOO님!</h1>
      <h1>나만의 서재가 완성됐어요!</h1>
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
    /* margin-bottom: 3.2rem; */
    /* 임의 폰트 */
    font-size: 3rem;
    font-weight: 800;
  }

  & > h2 {
  }
`;
