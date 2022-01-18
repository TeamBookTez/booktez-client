import styled from "styled-components";

import { ImgLanding02 } from "../../assets/images";

export default function LandingThree() {
  return (
    <StWrapper>
      <img src={ImgLanding02} alt="여기는 또 어떤 이미지가 들어갈까요?" />
      <div>
        <StH2>북스테어즈에서 해결해보세요</StH2>
        <p>
          구조화된 질문에 답변하며 머릿속에 지식을 쌓아 보세요
          <br />
          내가 알고 싶은 책의 내용들을 머릿 속에 쌓아가 보세요
        </p>
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

export const StH2 = styled.h2`
  margin-bottom: 4.2rem;
  ${({ theme }) => theme.fonts.header00}
  color: ${({ theme }) => theme.colors.gray100};
`;
