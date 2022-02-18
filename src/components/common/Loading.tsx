import styled from "styled-components";

import { GifLogo } from "../../assets/images";

export default function Loading() {
  return (
    <StLoadingWrapper>
      <img src={GifLogo} alt="로딩 중" width="200" height="200" />
    </StLoadingWrapper>
  );
}

const StLoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
  background-color: white;
`;
