import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgMainBanner } from "../../assets/images";

export default function Banner() {
  return (
    <StWrapper ratio="65.7rem">
      <StTitle>독서북 사용 가이드북</StTitle>
      <StContent>
        북스테이즈만의 독서법을 사용하여 책을 더욱 효율적으로 체험해보며 내가 가지고 있는 지식을 한계단 아뉘면 두계단
      </StContent>
      <StExampleLink to="/detail-example">적용 사례</StExampleLink>
      <img src={ImgMainBanner} alt="일러스트" />
    </StWrapper>
  );
}

const StWrapper = styled.section<{ ratio: string }>`
  position: relative;
  margin: 0 4rem;
  border-radius: 2rem;
  padding: 4.4rem ${({ ratio }) => ratio} 4rem 7.2rem;
  background-color: ${({ theme }) => theme.colors.white200};

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }
`;

const StTitle = styled.h3`
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.header1}
`;

const StContent = styled.p`
  margin-bottom: 3.3rem;
  width: 41.5rem;

  ${({ theme }) => theme.fonts.body2}
`;

const StExampleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13.7rem;
  height: 4.6rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.gray100};

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.button}
`;
