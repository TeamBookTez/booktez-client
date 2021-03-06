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
            <StPreface>
              <StLine></StLine> 다음 계단
            </StPreface>
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
          <StAnchor
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlnQz0Nwx8vtqmHtgNEkzPwUy-LsTMjt9KXlmsAGZiu1FJRw/viewform"
            target="_blank"
            rel="noopener noreferrer">
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

  margin: 8.8rem 0 0 11.6rem;

  & > img {
    width: 58.4rem;
    height: 57.6rem;
    margin-right: 3.6rem;
  }
`;

const Starticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StPreface = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray300};
`;

const StLine = styled.div`
  display: inline-block;

  width: 1.9rem;

  margin-right: 1.1rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.2rem;

  background-color: ${({ theme }) => theme.colors.gray300};
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
