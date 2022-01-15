import styled from "styled-components";

export default function BottomContent() {
  return (
    <StWrapper>
      <StCountBook>
        <StImgWrapper>
          <img src="" alt="" />
        </StImgWrapper>
        <StContentWrapper>
          <StBooksNum>10</StBooksNum>
          <StComment>
            지금까지
            <br />
            <span>권 책을 읽었어요</span>
          </StComment>
        </StContentWrapper>
      </StCountBook>
      <StServiceWrapper>
        <StServiceInfo>
          <StInfoTitle>개인정보 처리 방침</StInfoTitle>
          <StInfoDesc>북스테어즈를 만든 팀 북테즈를 소개해드릴게요 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>문의하기</StInfoTitle>
          <StInfoDesc>북스테어즈를 만든 팀 북테즈를 소개해드릴게요 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈 피드백 남기기</StInfoTitle>
          <StInfoDesc>북스테어즈를 만든 팀 북테즈를 소개해드릴게요 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈를 만든 사람들</StInfoTitle>
          <StInfoDesc>북스테어즈를 만든 팀 북테즈를 소개해드릴게요 </StInfoDesc>
        </StServiceInfo>
      </StServiceWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;

  width: 100%;
  height: 41%;
  padding: 0 4rem 7rem 4rem;
`;

// 로그인 여부에 따라 삼항연산자 분기 처리
const StCountBook = styled.article`
  width: 25%;

  margin-right: 4rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white400};
`;

const StImgWrapper = styled.div`
  width: 100%;
  height: 61%;

  border-radius: 2rem 2rem 0 0;
`;

const StContentWrapper = styled.div`
  display: flex;

  padding: 0 2.3rem 5rem 2.3rem;
`;

const StBooksNum = styled.strong`
  ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StComment = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  margin-left: 1.2rem;

  ${({ theme }) => theme.fonts.body0};
  color: ${({ theme }) => theme.colors.gray200};

  & > span {
    ${({ theme }) => theme.fonts.header4};
  }
`;

const StServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;

  width: 100%;
`;

const StServiceInfo = styled.article`
  width: 100%;
  height: 13.6rem;

  padding: 3.7rem 4.8rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StInfoTitle = styled.h5`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.header4};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StInfoDesc = styled.p`
  ${({ theme }) => theme.fonts.body6};
  color: ${({ theme }) => theme.colors.gray400};
`;
