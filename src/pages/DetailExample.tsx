import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import {
  DetailArticleWrapperLabeling,
  ExamplePeriNote,
  ExamplePreNote,
  ExamplePreNoteLabeling,
} from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { reviewData } from "../utils/mockData";

export default function DetailExample() {
  const isLogin = true;
  // const _token = localStorage.getItem("booktez-token");
  const navigate = useNavigate();

  const handlePeriCarousel = () => {
    console.log("냠");
  };

  return (
    <>
      <StNoteModalWrapper>
        <StIcCancelWhite onClick={() => navigate(-1)} />
        <StBookTitleUp>{reviewData?.bookTitle}</StBookTitleUp>
        <DetailArticleWrapper title="독서 전 단계">
          <ExamplePreNoteLabeling
            answerOne={reviewData?.answerOne}
            answerTwo={reviewData?.answerTwo}
            questionList={reviewData?.questionList}
            isLogin={isLogin}
          />
        </DetailArticleWrapper>
        {isLogin && (
          <StMarginTop>
            <DetailArticleWrapperLabeling title="독서 중 단계" handlePeriCarousel={handlePeriCarousel}>
              <ExamplePeriNote answerThree={reviewData?.answerThree} />
            </DetailArticleWrapperLabeling>
          </StMarginTop>
        )}
        {/* <PeriModal /> */}
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
