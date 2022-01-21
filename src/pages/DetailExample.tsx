import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StStepModalWrapper } from "../components/bookNote/preNote/PreNoteForm";
import PeriModal from "../components/bookNote/stepUp/PeriModal";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { DetailArticleWrapperLabeling, ExamplePeriNote, ExamplePreNoteLabeling } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { getData } from "../utils/lib/api";
import { reviewData } from "../utils/mockData";

export default function DetailExample() {
  const [isPeriModal, setIsPeriModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const navigate = useNavigate();

  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        return setIsLogin(false);
      }
      if (!(status === 200)) {
        return setIsLogin(false);
      }
      setIsLogin(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

  const handlePeriCarousel = () => {
    setIsPeriModal(!isPeriModal);
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
        {/* 모달창 하다가 중지 */}
        {isPeriModal && (
          <StStepModalWrapper>
            <PeriModal onToggleModal={handlePeriCarousel} />
          </StStepModalWrapper>
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
