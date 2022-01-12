import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { AlertLabel, Input } from "../common";

export default function FirstStep() {
  const [setIsAni] = useOutletContext<[React.Dispatch<React.SetStateAction<boolean>>]>();
  const goNextStep = () => {
    setIsAni(true);
  };

  return (
    <>
      <StParagraph>당신의 이메일을 입력해 주세요.</StParagraph>
      <StFormWrapper>
        <Input type="text" id="email" placeholder="이메일을 입력해주세요" />
        <AlertLabel isError={true}>올바른 형식이 아닙니다.</AlertLabel>
        <StBtn type="button" onClick={goNextStep}>
          다음 계단
        </StBtn>
      </StFormWrapper>
    </>
  );
}

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

const StBtn = styled.button`
  width: 46.4rem;
  height: 5.4rem;
  background-color: ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;
  margin-top: 5rem;

  /* 임의 폰트 */
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray300};
`;
