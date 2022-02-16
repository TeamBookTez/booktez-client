import { Link } from "react-router-dom";
import styled from "styled-components";

import { Ic404 } from "../../assets/icons";
import { ImgErrorBack } from "../../assets/images";
import theme from "../../styles/theme";
import { NavHeader } from ".";

export default function Error404() {
  return (
    <StPage>
      <NavHeader logocolor={theme.colors.gray100} />
      <StArticle>
        <Ic404 />
        <StH2>페이지를 사용할 수 없습니다.</StH2>
        <StH3>
          원하시는 결과를 찾을 수 없습니다.
          <br />
          클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.
        </StH3>
        <StLink to="/main">홈 바로가기</StLink>
      </StArticle>
      <StBackImg src={ImgErrorBack} alt="배경 일러스트" />
    </StPage>
  );
}

const StPage = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const StBackImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  /* 이미지 크기 */
  width: 46.4rem;
  height: 34.7rem;

  z-index: -10;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StH2 = styled.h2`
  margin-top: 6.8rem;

  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StH3 = styled.h3`
  margin-top: 1.8rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 6.3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.orange100}; // active

  width: 32.5rem;
  height: 5.6rem;

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
`;
