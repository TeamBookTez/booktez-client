import styled from "styled-components";

export default function BottomContent() {
  return (
    <StWrapper>
      <StCountBook>
        <StImgWrapper>
          <img src="" alt="" />
        </StImgWrapper>
        <StContentWrapper>
          <StBooksNum>8</StBooksNum>
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
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것</StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>문의하기</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈 피드백 남기기</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈를 만든 사람들</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
      </StServiceWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;

  width: 100%;
  padding: 0 4rem 7rem 4rem;
`;

// 로그인 여부에 따라 삼항연산자 분기 처리
const StCountBook = styled.article`
  width: 28rem;

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
  justify-content: center;

  padding: 0 2.5rem 5rem 2.5rem;
`;

const StBooksNum = styled.strong`
  margin-right: 0.8rem;

  // 임시 폰트 설정
  font-family: Pretendard;
  font-size: 62px;
  font-style: normal;
  font-weight: 700;
  line-height: 81px;
  letter-spacing: -0.01em;
  color: #3d3d3d;
`;

const StComment = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  // 임시 폰트 설정
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -1px;

  & > span {
    font-weight: 700;
  }
`;

const StServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
`;

const StServiceInfo = styled.article`
  /* width: 57.2rem;
  height: 13.6rem; */

  padding: 3.7rem 4.9rem;

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StInfoTitle = styled.h5`
  margin-bottom: 1.5rem;

  font-family: Pretendard;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.6rem;
  letter-spacing: -0.01rem;
  color: #3d3d3d;
`;

const StInfoDesc = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: -0.01rem;
  color: #939393;
`;
