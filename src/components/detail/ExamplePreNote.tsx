import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";
import { Button } from "../common/styled/Button";
import LabelQuestion from "../common/styled/LabelQuestion";

interface ExamplePreNoteProps {
  answerOne: string | undefined;
  answerTwo: string | undefined;
  questionList: string[] | undefined;
  isLogin: boolean;
}

export default function ExamplePreNote(props: ExamplePreNoteProps) {
  const { answerOne, answerTwo, questionList, isLogin } = props;
  const navigate = useNavigate();
  const NICKNAME = sessionStorage.getItem("booktez-nickname");

  const handleGoSignup = () => {
    navigate("/signup", { state: "rightpath" });
  };

  return (
    <StExampleWrapper>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        {isLogin ? `${NICKNAME} 독서가` : "익명의 독서가"}님은 이 책에 어떤 기대를 하고 계신가요?
      </StFirstQuestion>
      <StAnswer>{answerOne}</StAnswer>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />이 책의 핵심 메시지는 무엇일까요? 그 중 어느 부분이{" "}
        {isLogin ? `${NICKNAME} 독서가` : "익명의 독서가"}
        님의 기대를 만족시킬 수 있을까요?
      </StFirstQuestion>
      <StAnswer>{answerTwo}</StAnswer>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        {isLogin ? `${NICKNAME} 독서가` : "익명의 독서가"}님은 이 책에 어떤 기대를 하고 계신가요?
      </StFirstQuestion>
      {isLogin ? (
        questionList?.map((question: string, idx: number) => <StAnswer key={idx}>{question}</StAnswer>)
      ) : (
        <StLinkWrapper>
          <StSignupText>
            독서가들의 기대를 채워줄 책의 내용들은
            <br />
            어떻게 구체화 되어갈까요?
          </StSignupText>
          <StButton onClick={handleGoSignup}>회원가입 후 이어보기</StButton>
        </StLinkWrapper>
      )}
    </StExampleWrapper>
  );
}

const StExampleWrapper = styled.article`
  width: 100%;

  margin-top: 1.2rem;
  padding: 3rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};

  /* 선 추가는 여기서 &::before {} 로 */
  & article {
    padding-left: 5.6rem;
  }
`;

const StQuestion = styled.h3`
  margin-top: 2.4rem;

  ${({ theme }) => theme.fonts.body2};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StFirstQuestion = styled(StQuestion)`
  margin-top: 4.6rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StAnswer = styled.h4`
  list-style: none;

  position: relative;

  margin-top: 1.7rem;
  padding-left: 5.7rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray300};
  white-space: pre-wrap;

  &::before {
    content: "";
    position: absolute;
    left: 3.4rem;
    top: 0.82rem;

    width: 0.7rem;
    height: 0.7rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

const StLinkWrapper = styled.section`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 25.9rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -9.07%, rgba(194, 195, 204, 0.85) 100%);
`;

const StSignupText = styled.p`
  text-align: center;

  ${({ theme }) => theme.fonts.body0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StButton = styled(Button)`
  width: 32.5rem;
  height: 5.6rem;

  margin-top: 1.2rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
