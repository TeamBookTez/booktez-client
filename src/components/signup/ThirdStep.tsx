import styled from "styled-components";

import { IcAlert } from "../../assets/icons";
import { Button } from "../common";

export default function ThirdStep() {
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
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StFormWrapper>
        <StInput type="text" id="email" placeholder="blabla@google.com" />
        <StLabelWrapper></StLabelWrapper>
        <StInput type="text" id="email" placeholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요" />
        <StLabelWrapper>
          <IcAlert />
          <StStrong>비밀번호 형식 에러</StStrong>
        </StLabelWrapper>
        <StInput type="text" id="email" placeholder="비밀번호를 확인해 주세요" />
        <StLabelWrapper>
          <IcAlert />
          <StStrong>비밀번호가 다릅니다.</StStrong>
        </StLabelWrapper>
        <StNextStepBtn>다음 계단</StNextStepBtn>
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

  & > div {
    background-color: ${({ theme }) => theme.colors.orange100};
    color: ${({ theme }) => theme.colors.white};
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

  & > input:first-child {
    background-color: ${({ theme }) => theme.colors.white400};
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }

  & > input:first-child::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }
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
