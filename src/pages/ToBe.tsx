import styled from "styled-components";

import { ImgDevice } from "../assets/images";
import { MainHeader } from "../components/common";

export default function ToBe() {
  return (
    <>
      <MainHeader>준비중</MainHeader>
      <StSection>
        <Starticle>
          <div>
            <p>ㅡ 다음 계단</p>
            <h3>
              사용하시는 모든 기기에서
              <br />
              이용할 수 있도록 준비중이에요
            </h3>
            <p>
              진짜 독서가들이 최적의 독서활동을 할 수 있도록,
              <br />
              북스테어즈는 꾸준히 달립니다.
            </p>
          </div>
          <button>응원과 피드백 하러 가기</button>
        </Starticle>
        <img src={ImgDevice} alt="기기 사진" />
      </StSection>
    </>
  );
}

const StSection = styled.section`
  display: flex;
  justify-content: space-between;

  height: 57.2rem;

  margin: 5.2rem 0 0 11.6rem; ;
`;

const Starticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
