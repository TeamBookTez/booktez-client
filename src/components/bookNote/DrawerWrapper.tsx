import styled from "styled-components";

import { IcBooks, IcLeftArrow } from "../../assets/icons";
import { ImgGraphic } from "../../assets/images";

interface DrawerWrapperProps {
  children: React.ReactNode;
}
export default function DrawerWrapper(props: DrawerWrapperProps) {
  const { children } = props;

  return (
    <StDrawerWrapper>
      <IcLeftArrow />
      <StImg src={ImgGraphic} />
      <StTitleWrapper>
        <IcBooks />
        나는 왜 이 일을 하는가? 2
      </StTitleWrapper>
      <StArticle>{children}</StArticle>
    </StDrawerWrapper>
  );
}

const StDrawerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 39rem;
  height: 90rem;

  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0.17);

  padding: 3.3rem 3.3rem 5.4rem 3.3rem;

  & > svg {
    width: 4.4rem;
    height: 4.4rem;

    margin-bottom: 3.2rem;
  }
`;

const StImg = styled.img`
  width: 32.4rem;
  height: 11.9rem;

  margin-bottom: 3.8rem;

  border-radius: 1.6rem;
`;

const StTitleWrapper = styled.header`
  display: flex;

  ${({ theme }) => theme.fonts.header4};

  margin-bottom: 2rem;

  & > svg {
    width: 2rem;
    height: 2.1rem;

    margin-right: 0.6rem;
  }
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;

  width: 32.4rem;
  height: 53.4rem;

  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.white200};

  box-shadow: 0 0 1.8rem 0.9rem rgba(117, 106, 90, 0.09);
  border-radius: 2rem;
`;
