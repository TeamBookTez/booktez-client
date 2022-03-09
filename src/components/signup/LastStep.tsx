import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { ImgSignUpFinish } from "../../assets/images";
import { StHeading2, UserData } from "../../pages/Signup";
import { patchData, postData } from "../../utils/lib/api";
import { Loading } from "../common";
import { Button } from "../common/styled/Button";

export default function LastStep() {
  const [userData] = useOutletContext<[UserData]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

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
    addBookReview();
    sessionStorage.removeItem("booktez-bookData");
    sessionStorage.removeItem("booktez-reviewData");
    setIsLoading(false);

    setTimeout(() => navigate("/main"), 1000);
  };

  return (
    <StArticle>
      {isLoading ? (
        <Loading />
      ) : (
        <motion.div
          key="lastSignup"
          transition={{
            default: { duration: 1 },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <StHeading2>
            {userData["nickname"]}님!
            <br />
            나만의 서재가 완성됐어요!
          </StHeading2>

          <img src={ImgSignUpFinish} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
          <StHomeBtn type="button" onClick={goNextStep}>
            홈 바로가기
          </StHomeBtn>
        </motion.div>
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
