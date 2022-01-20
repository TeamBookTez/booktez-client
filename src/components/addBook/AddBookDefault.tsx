import styled from "styled-components";

import { ImgGraphic } from "../../assets/images";

export default function AddBookDefault() {
  return (
    <StWrapper>
      <StH3>
        북스테어즈와 독서를 해봐요! <br></br>
        어떤 책을 읽으시나요?
      </StH3>
      <StImg src={ImgGraphic} alt="그래픽 이미지입니다" />
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
  ${({ theme }) => theme.fonts.header3}

  color: ${({ theme }) => theme.colors.gray300};

  margin-bottom: 3.2rem;
`;

const StImg = styled.img`
  width: 32rem;
  height: 11.5rem;
`;
