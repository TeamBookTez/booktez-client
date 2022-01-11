import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { ImgGraphic } from "../../assets/images";

export default function LastStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/main", { state: "ani" }), 1000);
  };

  return (
    <StArticle>
      <StHeading2>OOOOOOOOOO님!</StHeading2>
      <StHeading2>나만의 서재가 완성됐어요!</StHeading2>
      <img src={ImgGraphic} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
      <StBtn type="button" onClick={goNextStep}>
        홈 바로가기
      </StBtn>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 31.938rem;
    height: 11.516rem;
    margin-top: 7.9rem;
    margin-bottom: 2.884rem;
  }
`;

const StHeading2 = styled.h2`
  /* margin-bottom: 3.2rem; */
  /* 임의 폰트 */
  font-size: 3rem;
  font-weight: 800;
  line-height: 3.9rem;
`;

const StBtn = styled.button`
  width: 46.4rem;
  height: 5.4rem;
  background-color: ${({ theme }) => theme.colors.orange100};
  border-radius: 1rem;
  margin-top: 5rem;

  /* 임의 폰트 */
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
