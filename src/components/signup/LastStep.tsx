import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { ImgGraphic } from "../../assets/images";
import { UserData } from "../../pages/Signup";
import { Button } from "../common";

export default function LastStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/main", { state: "rightpath" }), 1000);
  };

  return (
    <StArticle>
      <img src={ImgGraphic} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
      <StHomeBtn type="button" onClick={goNextStep}>
        홈 바로가기
      </StHomeBtn>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 31.938rem;
    height: 11.516rem;
    margin-top: 7.9rem;
    margin-bottom: 2.884rem;
  }
`;

const StHomeBtn = styled(Button)`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 5rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
