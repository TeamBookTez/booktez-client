import styled from "styled-components";

import { ImgEmptyBook } from "../../assets/images";

export default function BookEmpty() {
  return (
    <StWrapper>
      <StH3>찾으시는 책이 없어요!</StH3>
      <StImg src={ImgEmptyBook} alt="그래픽 이미지입니다" />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100% - 23.8rem);

  margin: 0 4rem 0 4rem;
`;

const StH3 = styled.h3`
  ${({ theme }) => theme.fonts.header4}

  color: ${({ theme }) => theme.colors.gray300};

  margin-bottom: 3.2rem;
`;

const StImg = styled.img`
  width: 28.4rem;
  height: 16.6rem;
`;
