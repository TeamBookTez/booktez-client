import styled from "styled-components";

export const StMobileBg = styled.div`
  background-color: ${({ theme }) => theme.colors.white200};
`;

export const StMobileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 32rem;
  max-width: 41.4rem;

  margin: 0 auto;
`;

export const StBackgroundFour = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 43rem;
`;

export const StWrapperFour = styled.article`
  width: 32rem;

  padding: 4.2rem 2rem 3.3rem 2rem;
`;
