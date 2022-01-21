import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Ic404 } from "../../assets/icons";
import { ImgErrorBack } from "../../assets/images";
import theme from "../../styles/theme";
import { NavHeader } from ".";
import { Button } from "./styled/Button";

export default function Error404() {
  const navigate = useNavigate();
  const GoSignup = () => {
    navigate("/signup", { state: "rightpath" });
  };

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
        <StBtn type="button" onClick={GoSignup}>
          홈 바로가기
        </StBtn>
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

const StBtn = styled(Button)`
  width: 32.5rem;
  height: 5.6rem;

  margin-top: 6.3rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
