import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { PopUpDelete } from "../components/common";
import Loading from "../components/common/Loading";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { GetBody } from "../utils/dataType";
import { getData } from "../utils/lib/api";
import { IsLoginState } from "./BookNote";

export default function DetailBookNote() {
  const [reviewData, setReviewData] = useState<GetBody>();
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { state } = useLocation();
  const isLoginState = state as IsLoginState;
  const { reviewId, isLogin, fromUrl } = isLoginState;

  const tempToken = localStorage.getItem("booktez-token");
  const token = tempToken ? tempToken : "";

  const navigate = useNavigate();

  const getReview = async (key: string, token: string) => {
    try {
      const {
        data: { data },
      } = await getData(key, token);

      setReviewData(data);
    } catch (err) {
      console.log("err", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getReview(`review/${reviewId}`, token);
  }, []);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };

  const handleBookDelete = () => {
    getReview(`review/${reviewId}`, token); //리렌더링
  };

  return (
    <>
      {isLogin && isLoading ? (
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
                onClick={() =>
                  navigate("/book-note/peri", { state: { reviewId, fromUrl: "/main/bookcase/post", isLogin } })
                }
              />
            </StBtnWrapper>
            <DetailArticleWrapper title="독서 전 단계">
              <ExamplePreNote
                answerOne={reviewData?.answerOne}
                answerTwo={reviewData?.answerTwo}
                questionList={reviewData?.questionList}
                isLogin={true}
              />
            </DetailArticleWrapper>
            <StMarginTop>
              <DetailArticleWrapper title="독서 중 단계">
                <ExamplePeriNote answerThree={reviewData?.answerThree} />
              </DetailArticleWrapper>
            </StMarginTop>
          </StNoteModalWrapper>
          {isPopUp ? (
            <PopUpDelete onPopUp={handlePopUp} reviewId={reviewId} handleBookDelete={handleBookDelete} />
          ) : (
            <></>
          )}
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
