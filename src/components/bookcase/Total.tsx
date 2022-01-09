import styled from "styled-components";

import Button from "../../components/common/Button";

export default function Total() {
  return (
    <StSection>
      <StCard>
        <img src={require("../../assets/imgs/notbooksimg.png")} alt="아이콘" />
        <StCardHeader>아직 읽은 책이 없어요</StCardHeader>
        <StCardDesc>이정도면 좋겠니아ㅣㅏㄹ</StCardDesc>
        <Button>+ 책 추가</Button>
      </StCard>
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 83%;
`;

const StCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-bottom: 1.7rem;
  }
`;

const StCardHeader = styled.h3`
  margin-bottom: 1.1rem;

  font-size: 2rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.4rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;
