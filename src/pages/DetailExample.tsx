import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { StStepModalWrapper } from "../components/bookNote/preNote/PreNoteForm";
import PeriModal from "../components/bookNote/stepUp/PeriModal";
import { Loading } from "../components/common";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { DetailArticleWrapperLabeling, ExamplePeriNote, ExamplePreNoteLabeling } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { isLoginState } from "../utils/atom";
import { reviewData } from "../utils/exampleData";
import { useCheckLoginState } from "../utils/useHooks";

export default function DetailExample() {
  const [isPeriModal, setIsPeriModal] = useState<boolean>(false);
  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handlePeriCarousel = () => {
    setIsPeriModal(!isPeriModal);
  };

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

const StBookTitleUp = styled(StBookTitle)`
  margin-bottom: 7.2rem;
`;

const StMarginTop = styled.div`
  margin-top: 8.3rem;
`;
