import styled from "styled-components";

export default function SignupNav() {
  return (
    <StSection>
      <header>
        <a>로고</a>
      </header>
      <article>
        <h2>북스테어즈에 오신 걸 환영합니다아ㅏㅇ</h2>
        <h3>
          북테즈와 함께 똑또또칸 사람이 되어보아용
          <br />
          회원가입하시면~~~나만의 서~~
        </h3>
        <img src="#" alt="북테즈 이미지" />
        <a>회원가입 버튼</a>
      </article>
    </StSection>
  );
}

const StSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white500};
`;
