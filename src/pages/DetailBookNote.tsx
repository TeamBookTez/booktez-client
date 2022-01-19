import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { PopUpDelete } from "../components/common";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { GetBody } from "../utils/dataType";
import { getData } from "../utils/lib/api";

export default function DetailBookNote() {
  const [reviewData, setReviewData] = useState<GetBody>();
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const reviewId = 4; // 리뷰 id 를 받아와 처리
  const _token = localStorage.getItem("booktez-token");
  const token = _token ? _token : "";
  const navigate = useNavigate();

  const getReview = async (key: string, token: string) => {
    try {
      const {
        data: { data },
      } = await getData(key, token);

      setReviewData(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getReview(`review/${reviewId}`, token);
  }, []);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };

  return (
    <>
      <StNoteModalWrapper>
        {isPopUp ? <></> : <StIcCancelWhite onClick={() => navigate(-1)} />}
        <StBookTitle>{reviewData?.bookTitle}</StBookTitle>
        <StBtnWrapper>
          <IcDeleteNote onClick={handlePopUp} />
          <IcModifyNote />
        </StBtnWrapper>
        <DetailArticleWrapper title="독서 전 단계">
          <ExamplePreNote
            answerOne={reviewData?.answerOne}
            answerTwo={reviewData?.answerTwo}
            questionList={reviewData?.questionList}
          />
        </DetailArticleWrapper>
        <StMarginTop>
          <DetailArticleWrapper title="독서 중 단계">
            <ExamplePeriNote answerThree={reviewData?.answerThree} />
          </DetailArticleWrapper>
        </StMarginTop>
      </StNoteModalWrapper>
      {isPopUp ? <PopUpDelete onPopUp={handlePopUp} reviewId={reviewId} /> : <></>}
    </>
  );
}

const StBtnWrapper = styled.div`
  text-align: right;

  & > svg {
    &:hover {
      cursor: pointer;
    }
  }
  & > svg:not(:first-child) {
    margin-left: 1.4rem;
  }
`;
const StMarginTop = styled.div`
  margin-top: 8.3rem;
`;
