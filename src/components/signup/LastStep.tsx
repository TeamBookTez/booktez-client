import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { ImgSignUpFinish } from "../../assets/images";
import { UserData } from "../../pages/Signup";
import { patchData, postData } from "../../utils/lib/api";
import { Button } from "../common/styled/Button";

export default function LastStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const addBookReview = async () => {
    const localToken = localStorage.getItem("booktez-token");
    const userToken = localToken ? localToken : "";
    const localBookData = localStorage.getItem("booktez-bookData");
    const bookData = localBookData ? JSON.parse(localBookData) : null;

    const localReviewData = localStorage.getItem("booktez-reviewData");
    const reviewData = localReviewData ? JSON.parse(localReviewData) : { answerOne: "", answerTwo: "" };

    const { data } = await postData("/book", bookData, userToken);
    const reviewId = data.data.isLogin.reviewId;

    await patchData(userToken, `/review/before/${reviewId}`, {
      ...reviewData,
      questionList: [""],
      progress: 2,
    });
  };

  const goNextStep = () => {
    addBookReview();
    localStorage.removeItem("booktez-bookData");
    localStorage.removeItem("booktez-reviewData");
    handleIsAniTime(true);
    setTimeout(() => nav("/main", { state: "rightpath" }), 1000);
  };

  return (
    <StArticle>
      <img src={ImgSignUpFinish} alt="회원 가입 완료시 뜨는 그래픽 문구입니다" />
      <StHomeBtn type="button" onClick={goNextStep}>
        홈 바로가기
      </StHomeBtn>
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
