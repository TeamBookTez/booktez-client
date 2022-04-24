import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { ImgReadNum } from "../../assets/images";
import { UserInfo } from "../../pages/MyPage";
import { isLoginState } from "../../utils/atom";
import { BookComment } from ".";

interface ServiceContentProps {
  userInfo: UserInfo;
  children: React.ReactNode;
}

export default function ServiceContent(props: ServiceContentProps) {
  const { userInfo, children } = props;
  const { reviewCount } = userInfo;

  const isLogin = useRecoilValue(isLoginState);

  return (
    <StWrapper>
      {isLogin && (
        <StCountBook>
          <StImgWrapper>
            <img src={ImgReadNum} alt="읽은 책 수" />
          </StImgWrapper>
          <StContentWrapper>
            <StBooksNum>{reviewCount}</StBooksNum>
            <BookComment booksNum={reviewCount} />
          </StContentWrapper>
        </StCountBook>
      )}
      <StServiceWrapper>
        <StServiceInfo>
          <a
            href="https://rose-prepared-583.notion.site/6e6807cf2fff4effbd108057e611d5b9"
            target="_blank"
            rel="noopener noreferrer">
            <StInfoTitle>개인정보 처리 방침</StInfoTitle>
            <StInfoDesc>북스테어즈는 개인정보보호 규정, 가이드라인을 준수하고 있어요.</StInfoDesc>
          </a>
        </StServiceInfo>
        <StServiceInfo>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd91WwzYqTpCzfMFOkrbwUtFiMGK7YGkP36lWbmsgPFomvNUg/viewform"
            target="_blank"
            rel="noopener noreferrer">
            <StInfoTitle>서비스 문의</StInfoTitle>
            <StInfoDesc>북스테어즈를 이용하며 문의하고 싶은 점들을 남겨주세요</StInfoDesc>
          </a>
        </StServiceInfo>
        <StServiceInfo>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlnQz0Nwx8vtqmHtgNEkzPwUy-LsTMjt9KXlmsAGZiu1FJRw/viewform"
            target="_blank"
            rel="noopener noreferrer">
            <StInfoTitle>피드백 남기기</StInfoTitle>
            <StInfoDesc>북스테어즈를 사용하시면서 느낀 점들에 대해 남겨주세요</StInfoDesc>
          </a>
        </StServiceInfo>
        <StServiceInfo>
          <a
            href="https://rose-prepared-583.notion.site/b644acc67642448584a2cc6528dcbd7d"
            target="_blank"
            rel="noopener noreferrer">
            <StInfoTitle>함께하는 사람들</StInfoTitle>
            <StInfoDesc>북스테어즈를 만들어가는 팀원들을 소개할게요.</StInfoDesc>
          </a>
        </StServiceInfo>
      </StServiceWrapper>
      {children}
    </StWrapper>
  );
}

const StWrapper = styled.section`
  position: relative;

  display: flex;

  width: 100%;
  height: 41%;

  padding: 0 4rem 0 4rem;
`;

const StCountBook = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 24.5rem;
  height: 30.3rem;

  margin-right: 4rem;

  border-radius: 2rem;

  background-color: #fbedea;
`;

const StImgWrapper = styled.div`
  width: 21.1rem;
  height: 16.3rem;

  margin-bottom: 2.5rem;

  border-radius: 2rem 2rem 0 0;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 2rem 5rem 2rem;
`;

const StBooksNum = styled.strong`
  margin-right: 1.2rem;

  ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StServiceWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
`;

const StServiceInfo = styled.article`
  width: 100%;
  height: 13.6rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  & > a {
    display: block;

    width: 100%;
    height: 100%;

    padding: 3.7rem 4.8rem;
  }
`;

const StInfoTitle = styled.h4`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.header4};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StInfoDesc = styled.p`
  ${({ theme }) => theme.fonts.body6};
  color: ${({ theme }) => theme.colors.gray400};
`;
