import styled from "styled-components";

import { ImgGraphic } from "../../assets/imgs";

export default function LastStep() {
  return (
    <StArticle>
      <h2>OOOOOOOOOO님!</h2>
      <h2>나만의 서재가 완성됐어요!</h2>
      <img src={ImgGraphic} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
      <button>홈 바로가기</button>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    /* margin-bottom: 3.2rem; */
    /* 임의 폰트 */
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
  }

  & > img {
    width: 31.938rem;
    height: 11.516rem;
    margin-top: 7.9rem;
    margin-bottom: 2.884rem;
  }

  & > button {
    width: 46.4rem;
    height: 5.4rem;
    background-color: ${({ theme }) => theme.colors.orange100};
    border-radius: 1rem;
    margin-top: 5rem;

    /* 임의 폰트 */
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`;
