import styled from "styled-components";

import { IcLandingMobileThree } from "../../assets/icons";
import { StMobileMain } from "../common/styled/MobileLanding";

export default function MobileLandingThree() {
  return (
    <StMobileMain>
      <StWrapper>
        <StH2>
          차별화 된 독서 방법을 <br /> 제안합니다.
        </StH2>
        <StParagraph>
          독서가들이 최적의 독서 활동을 해나갈 수 있도록
          <br />
          돕습니다. 그 시작으로, 뇌 과학 기반의 차별화 된 <br />
          독서법을 만나 보세요.
        </StParagraph>
        <StMobileMain>
          <IcLandingMobileThree />
        </StMobileMain>
      </StWrapper>
    </StMobileMain>
  );
}

const StWrapper = styled.section`
  height: 42.4rem;

  padding: 4.4rem 2.2rem;
`;

const StH2 = styled.h2`
  margin-bottom: 1.4rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h2};
`;

const StParagraph = styled.p`
  margin-bottom: 3.8rem;

  text-align: center;

  ${({ theme }) => theme.fonts.Body2};
`;
