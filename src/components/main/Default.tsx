import styled from "styled-components";

import { ImgMainDefault } from "../../assets/images";
import { Button } from "../common";

export default function Default() {
  return (
    <>
      <StImg src={ImgMainDefault} alt="빈 서재 기본 이미지" />
      <StH4>아직 읽은 책이 없어요</StH4>
      <StNotice>
        북스테어즈만의 독서법을 통해
        <br />
        지식을 얻고 독서의 매력을 느껴요
      </StNotice>
      <StButton type="button">+ 책 추가</StButton>
    </>
  );
}

const StImg = styled.img`
  margin-top: 0.6rem;
  width: 28.4rem;
  height: 16.6rem;
`;

const StH4 = styled.h4`
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray300};
`;

const StNotice = styled.p`
  text-align: center;

  margin-bottom: 2.4rem;

  width: 21.9rem;

  ${({ theme }) => theme.fonts.body6}
`;

const StButton = styled(Button)`
  width: 13.7rem;
  height: 4.6rem;
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.button}
`;
