import styled from "styled-components";

import { ImgAddBooksSearch } from "../../assets/images";

export default function AddBookDefault() {
  return (
    <StWrapper>
      <StImgAddBookSearch src={ImgAddBooksSearch} alt="그래픽 이미지입니다" />
      <StH3>
        어떤 책을 읽으시나요? <br></br>
        북스테어즈와 독서를 해봐요!
      </StH3>
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

const StImgAddBookSearch = styled.img`
  width: 24.8rem;
  height: 24.6rem;

  margin-bottom: 6.6rem;
`;

const StH3 = styled.h3`
  margin-bottom: 3.2rem;

  text-align: center;

  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray300};
`;
