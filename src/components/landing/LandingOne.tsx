import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgLanding01 } from "../../assets/images";
import { Button } from "../common/styled/Button";

export default function LandingOne() {
  return (
    <StWrapper>
      <StArticle>
        <StTitle>
          진짜 독서가들을 위한
          <br />
          독서법을 만들어 갑니다
        </StTitle>
        <Link to="/main">
          <StButton>북스테어즈 시작</StButton>
        </Link>
      </StArticle>
      <img src={ImgLanding01} alt="여긴 어떤 이미지가 들어갈까요?" />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  width: 100%;
`;

const StArticle = styled.article`
  margin-top: 15rem;
`;

const StTitle = styled.h1`
  ${({ theme }) => theme.fonts.header001}
`;

const StButton = styled(Button)`
  margin-top: 5.1rem;
  border-radius: 1.6rem;
  padding: 1.8rem 2.5rem;

  ${({ theme }) => theme.fonts.header3}
`;
