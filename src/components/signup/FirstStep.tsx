import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { IcAlert } from "../../assets/icons";
import { Button } from "../common";

export default function FirstStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/signup/2", { state: "ani" }), 1000);
  };

  return (
    <StArticle>
      <StStepWrapper>
        <div>1</div>
        <div></div>
        <div></div>
        <div>2</div>
        <div></div>
        <div></div>
        <div>3</div>
      </StStepWrapper>
      <StHeading2>나만의 서재를 만드는 중이에요!</StHeading2>
      <StParagraph>당신의 이메일을 입력해 주세요.</StParagraph>
      <StFormWrapper>
        <StInput type="text" id="email" placeholder="이메일을 입력해주세요" />
        <StLabelWrapper>
          <IcAlert />
          <StStrong>올바른 형식이 아닙니다.</StStrong>
        </StLabelWrapper>
        <StNextStepBtn type="button" onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StFormWrapper>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StStepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5.8rem;

  // 앞에서 2번째까지의 요소
  & > div:nth-child(-n + 2) {
    background-color: ${({ theme }) => theme.colors.orange100};
    color: ${({ theme }) => theme.colors.white};
  }

  // 3번째 요소와 그 이후
  & > div:nth-child(n + 3) {
    background-color: ${({ theme }) => theme.colors.white200};
    color: ${({ theme }) => theme.colors.gray200};
  }

  & > div:nth-child(3n + 1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    /* vertical-align: middle; */

    /* 임의 폰트 */
    font-size: 1.8rem;
    font-weight: 700;
  }

  & > div:not(:nth-child(3n + 1)) {
    width: 2.9rem;
    height: 0.4rem;
  }
`;

const StHeading2 = styled.h2`
  margin-bottom: 3.2rem;
  /* 임의 폰트 */
  font-size: 3rem;
  font-weight: 800;
`;

const StParagraph = styled.p`
  margin-bottom: 5.2rem;
  /* 임의 폰트 */
  font-size: 2rem;
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StInput = styled.input`
  width: 46.4rem;
  height: 5.4rem;
  background-color: ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;
  padding-left: 2rem;

  /* 임의 폰트 */
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StLabelWrapper = styled.label`
  width: 100%;
  height: 2.4rem;
  margin: 1.6rem 0;
  display: flex;

  & > svg {
    height: 100%;
    width: auto;
    margin-right: 0.4rem;
  }
`;

const StNextStepBtn = styled(Button)`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 5rem;

  border-radius: 1rem;
`;

const StStrong = styled.strong`
  display: flex;
  align-items: center;
  /* 임의 폰트 */
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.red100};
`;
