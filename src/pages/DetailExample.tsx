import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { reviewData } from "../utils/mockData";

export default function DetailExample() {
  const isLogin = false;
  // const _token = localStorage.getItem("booktez-token");
  const navigate = useNavigate();

  return (
    <>
      <StNoteModalWrapper>
        <StIcCancelWhite onClick={() => navigate(-1)} />
        <StBookTitleUp>{reviewData?.bookTitle}</StBookTitleUp>
        <DetailArticleWrapper title="독서 전 단계">
          <ExamplePreNote
            answerOne={reviewData?.answerOne}
            answerTwo={reviewData?.answerTwo}
            questionList={reviewData?.questionList}
            isLogin={isLogin}
          />
        </DetailArticleWrapper>
        {isLogin && (
          <StMarginTop>
            <DetailArticleWrapper title="독서 중 단계">
              <ExamplePeriNote answerThree={reviewData?.answerThree} />
            </DetailArticleWrapper>
          </StMarginTop>
        )}
      </StNoteModalWrapper>
    </>
  );
}

const StBookTitleUp = styled(StBookTitle)`
  margin-bottom: 7.2rem;
`;

const StMarginTop = styled.div`
  margin-top: 8.3rem;
`;
