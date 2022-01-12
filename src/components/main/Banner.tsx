import styled from "styled-components";

import { Button } from "../common/styled/Button";

export default function Banner() {
  return (
    <StWrapper>
      <StTitle>독서북 사용 가이드북</StTitle>
      <StContent>
        북스테이즈만의 독서법을 사용하여 책을 더욱 효율적으로 체험해보며 내가 가지고 있는 지식을 한계단 아뉘면 두계단
      </StContent>
      {/* button 재사용에 대해서 고민하기 */}
      <StExBtn>적용 사례</StExBtn>
      <img alt="일러스트" />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  margin: 0 4rem;
  border-radius: 2rem;
  padding: 6rem 0 4.7rem 7.2rem;
  background-color: #f7f5f3;
  /* width: 118.4rem;
  height: 27.4rem; */
`;

const StTitle = styled.h3`
  margin-bottom: 1.6rem;

  font-size: 2.6rem;
  line-height: 1.3;
  letter-spacing: -0.1em;
`;

const StContent = styled.p`
  margin-bottom: 3.3rem;
  width: 46.4rem;

  font-size: 2rem;
  line-height: 1.3;
  letter-spacing: -0.1em;
`;

const StExBtn = styled(Button)`
  width: 13.7rem;
  height: 4.6rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  // 임의 색
  color: ${({ theme }) => theme.colors.gray300};
`;
