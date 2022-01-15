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
            <StPreface>ㅡ 다음 계단</StPreface>
            <StH3>
              사용하시는 모든 기기에서
              <br />
              이용할 수 있도록 준비중이에요
            </StH3>
            <StExplain>
              진짜 독서가들이 최적의 독서활동을 할 수 있도록,
              <br />
              북스테어즈는 꾸준히 달립니다.
            </StExplain>
          </div>
          <StAnchor href="" target="_blank">
            응원과 피드백 하러 가기
          </StAnchor>
        </Starticle>
        <img src={ImgDevice} alt="기기 사진" width="618px" height="572px" />
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

const StPreface = styled.p`
  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray300};
`;

const StH3 = styled.h3`
  margin-top: 6.4rem;

  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StExplain = styled.p`
  margin-top: 3.2rem;

  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.5rem;
  height: 5.6rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.orange100};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.button}
`;
