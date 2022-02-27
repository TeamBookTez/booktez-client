import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { Loading, PopUpDelete } from "../components/common";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { navigatingBookInfoState } from "../utils/atom";
import { PeriNoteTreeNode } from "../utils/dataType";
import { getData } from "../utils/lib/api";

interface ReviewData {
  bookTitle: string;
  answerOne: string;
  answerTwo: string;
  answerThree: PeriNoteTreeNode;
  questionList: string[];
}

export default function DetailBookNote() {
  const [reviewData, setReviewData] = useState<ReviewData>({
    bookTitle: "",
    answerOne: "",
    answerTwo: "",
    answerThree: { type: "Root", content: "root", children: [] },
    questionList: [""],
  });
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [navigatingBookInfo, navigatingBookInfoHandler] = useRecoilState(navigatingBookInfoState);
  const { reviewId, fromUrl } = navigatingBookInfo;

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const navigate = useNavigate();

  const getReview = async (key: string, token: string) => {
    try {
      const {
        data: { data },
      } = await getData(key, token);

      setReviewData(data);
    } catch (err) {
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getReview(`review/${reviewId}`, userToken);
  }, []);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StNoteModalWrapper>
            {isPopUp ? (
              <></>
            ) : (
              <Link to={fromUrl}>
                <StIcCancelWhite />
              </Link>
            )}
            <StBookTitle>{reviewData?.bookTitle}</StBookTitle>
            <StBtnWrapper>
              <IcDeleteNote onClick={handlePopUp} />
              <IcModifyNote
                onClick={() => {
                  navigatingBookInfoHandler((prev) => ({ ...prev, title: reviewData?.bookTitle }));
                  navigate("/book-note/peri");
                }}
              />
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
                {reviewData?.answerThree && <ExamplePeriNote answerThree={reviewData.answerThree} />}
              </DetailArticleWrapper>
            </StMarginTop>
          </StNoteModalWrapper>
          {isPopUp ? <PopUpDelete onPopUp={handlePopUp} pathKey="/book" /> : <></>}
        </>
      )}
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
