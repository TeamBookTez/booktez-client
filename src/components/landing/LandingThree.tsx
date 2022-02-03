import styled from "styled-components";

import { ImgLanding02 } from "../../assets/images";

export default function LandingThree() {
  return (
    <StWrapper>
      <StImgLanding02 src={ImgLanding02} alt="여기는 또 어떤 이미지가 들어갈까요?" />
      <div>
        <StH2>차별화 된 독서 방법을 제안합니다.</StH2>
        <StParagraph>
          독서가들이 최적의 독서 활동을 해나갈 수 있도록 돕습니다.
          <br />그 시작으로, 뇌 과학 기반의 차별화 된 독서법을 만나 보세요.
        </StParagraph>
      </div>
    </StWrapper>
  );
}

export const StWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${({ theme }) => theme.fonts.body00}
`;

const StImgLanding02 = styled.img`
  width: 55.6rem;
  height: 90rem;
`;

export const StH2 = styled.h2`
  margin-bottom: 4.2rem;
  ${({ theme }) => theme.fonts.header00}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StParagraph = styled.p`
  ${({ theme }) => theme.fonts.body00}
`;
