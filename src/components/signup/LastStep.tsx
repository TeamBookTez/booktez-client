/*
마지막 편집자: 22-05-29 soryeongk
변경사항 및 참고:
  - react router dom을 사용하지 않는 넥제를 대비해 Outlet을 사용하지 않는 방향으로 바꾸었습니다.
  - 이에 따라 Router.tsx 파일도 변경되었습니다!
    
고민점:
  - 별도의 타입 가드없이 nickname이 string | null로 되도록 해두었는데,
    Next.js로 옮길 때 nickname이 null인 경우에는 메인으로 리디렉션하는 것 넣으면 좋을 듯합니다.
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgSignUpFinish } from "../../assets/images";
import { patchData, postData } from "../../utils/lib/api";
import { Loading } from "../common";
import { Button } from "../common/styled/Button";
import { StSignupHeading2 } from "../common/styled/Signup";

export default function LastStep() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const nickname = localStorage.getItem("booktez-nickname");

  const addBookReview = async () => {
    const _token = localStorage.getItem("booktez-token");
    const userToken = _token ? _token : "";
    const tempBookData = sessionStorage.getItem("booktez-bookData");
    const bookData = tempBookData ? JSON.parse(tempBookData) : null;

    const localReviewData = sessionStorage.getItem("booktez-reviewData");
    const reviewData = localReviewData ? JSON.parse(localReviewData) : { answerOne: "", answerTwo: "" };

    const { data } = await postData("/book", bookData, userToken);
    const postBookReviewId = data.data.reviewId;

    await patchData(userToken, `/review/${postBookReviewId}/pre`, {
      ...reviewData,
      questionList: [""],
      reviewSt: 2,
    });
  };

  const goNextStep = () => {
    setIsLoading(true);

    if (sessionStorage.getItem("booktez-bookData")) {
      addBookReview();
      sessionStorage.removeItem("booktez-bookData");
      sessionStorage.removeItem("booktez-reviewData");
    }

    setIsLoading(false);

    navigate("/main");
  };

  return (
    <StArticle>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StSignupHeading2>
            {nickname}님!
            <br />
            나만의 서재가 완성됐어요!
          </StSignupHeading2>

          <img src={ImgSignUpFinish} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
          <StHomeBtn type="button" onClick={goNextStep}>
            홈 바로가기
          </StHomeBtn>
        </>
      )}
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHomeBtn = styled(Button)`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 3.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
