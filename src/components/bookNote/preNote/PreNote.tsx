import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";

import { PeriNoteData, PreNoteData } from "../../../pages/BookNote";
import { isLoginState } from "../../../utils/atom";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { patchBookNote } from "../../../utils/lib/api";
import { useFetchNote } from "../../../utils/useHooks";
import { Loading } from "../../common";
import { Button } from "../../common/styled/Button";
import { PopUpPreDone, PreNoteForm, QuestionThree } from "..";

export default function PreNote() {
  const [
    reviewId,
    userToken,
    navIndex,
    isSave,
    handleOpenDrawer,
    handleCloseDrawer,
    preventGoBack,
    saveReview,
    isPrevented,
    handlePrevent,
  ] =
    useOutletContext<
      [
        string,
        string,
        number,
        boolean,
        (i: number) => void,
        () => void,
        () => void,
        (body: PreNoteData | PeriNoteData) => Promise<void>,
        boolean,
        (shouldPrevent: boolean) => void,
      ]
    >();

  const { data, setData, isLoading } = useFetchNote<PreNoteData>(userToken, `/review/${reviewId}/pre`, {
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    reviewSt: 2,
    finishSt: false,
  });
  const { answerOne, answerTwo, questionList, reviewSt } = data;

  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isFilledOnlyThree, setIsFilledOnlyThree] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [ableGoPeri, setAbleGoPeri] = useState<boolean>(true);
  const isLogin = useRecoilValue(isLoginState);
  const navigate = useNavigate();

  const userNickname = localStorage.getItem("booktez-nickname");

  const handleChangeReview = (key: string, value: string | string[] | number): void => {
    setData((currentNote) => {
      const newData = { ...currentNote };

      newData[key] = value;

      return newData;
    });
  };

  // ?????? ????????? ???????????? - ?????? ??? '??????' ?????? - ?????? ??????
  const handleSubmit = async () => {
    setAbleGoPeri(true);

    if (!data.finishSt) {
      patchBookNote(userToken, `/review/${reviewId}/pre`, { ...data, reviewSt: 3 });
    } else {
      patchBookNote(userToken, `/review/${reviewId}/pre`, data);
    }

    if (reviewSt === 2) {
      const questionFromPre: PeriNoteTreeNode[] = [];

      data.questionList.map((content) => {
        questionFromPre.push({ type: "question", content, children: [{ type: "answer", content: "", children: [] }] });
      });

      setAbleGoPeri(false);
      const resData = await patchBookNote(userToken, `review/${reviewId}/peri`, {
        answerThree: {
          type: "Root",
          content: "root",
          children: questionFromPre,
        },
        reviewSt: 3,
        finishSt: false,
      });

      if (resData) {
        setAbleGoPeri(true);
      }
    }

    // call stack??? ????????? ??? ?????? ????????? ??? ?????????
    setTimeout(() => {
      handlePrevent(false);
      setOpenModal(false);
      if (ableGoPeri) navigate("/book-note/peri");
    }, 0);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };

  const handleGoSignup = () => {
    sessionStorage.setItem("booktez-reviewData", JSON.stringify({ answerOne, answerTwo }));
    navigate("/signup", { state: "rightpath" });
  };

  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => {
      window.removeEventListener("popstate", preventGoBack);
      handleCloseDrawer();
    };
  }, []);

  useEffect(() => {
    if (data.reviewSt > 2) {
      handlePrevent(false);
      setIsFilled(true);
      setIsFilledOnlyThree(true);
    } else {
      handlePrevent(true);
    }

    if (answerOne && answerTwo && !questionList.includes("")) {
      setIsFilled(true);
      setIsFilledOnlyThree(true);
    } else if (!questionList.includes("")) {
      setIsFilled(false);
      setIsFilledOnlyThree(true);
    } else {
      setIsFilled(false);
      setIsFilledOnlyThree(false);
    }
  }, [data]);

  useEffect(() => {
    if (!navIndex && isSave) {
      saveReview(data);
    }
  }, [isSave, navIndex]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <StNoteForm onSubmit={(e) => e.preventDefault()}>
          <StFormHead>?????? ????????? ??? ??????????????? ???????????????.</StFormHead>
          <StFormWrapper>
            <PreNoteForm
              question={`${isLogin ? `${userNickname} ` : "????????? ?????????"}?????? ??? ?????? ?????? ????????? ?????? ?????????????`}
              idx={1}
              onOpenDrawer={handleOpenDrawer}>
              <StTextarea
                placeholder="????????? ??????????????????."
                value={data.answerOne}
                onChange={(e) => handleChangeReview("answerOne", e.target.value)}
              />
            </PreNoteForm>
            <PreNoteForm
              question="??? ?????? ?????? ???????????? ???????????????? ??? ??? ?????? ???????????? ????????? ???????????? ??? ????????????? "
              idx={2}
              onOpenDrawer={handleOpenDrawer}>
              <StTextarea
                placeholder="????????? ??????????????????."
                value={data.answerTwo}
                onChange={(e) => handleChangeReview("answerTwo", e.target.value)}
              />
            </PreNoteForm>
            {isLogin ? (
              <QuestionThree
                questionList={data.questionList}
                onChangeReview={handleChangeReview}
                onOpenDrawer={handleOpenDrawer}
                isPrevented={isPrevented}
                isFilledOnlyThree={isFilledOnlyThree}
              />
            ) : (
              <StLinkWrapper>
                <StSignupText>
                  ??? ????????? ????????? ?????? ????????????
                  <br />
                  ????????? ????????? ????????? ??????????
                </StSignupText>
                <StButton onClick={handleGoSignup} className="btn_signup">
                  ???????????? ??? ????????????
                </StButton>
              </StLinkWrapper>
            )}
          </StFormWrapper>

          <StNextBtn type="button" disabled={!isFilled || data.questionList.length === 0} onClick={handleOpenModal}>
            ?????? ??????
          </StNextBtn>
        </StNoteForm>

        {openModal && <PopUpPreDone onSubmit={handleSubmit} onCancel={handleCancelModal} />}
      </>
    );
  }
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-height: fit-content;
`;

const StFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12.8rem;

  width: 100%;
`;

const StFormHead = styled.h2`
  padding: 4.5rem 0 4.5rem 2rem;
  width: 100%;

  ${({ theme }) => theme.fonts.header3};
`;

const StTextarea = styled.textarea`
  border: none;
  width: 100%;
  height: 15.4rem;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.body4}
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
    ${({ theme }) => theme.fonts.body4}
  }
`;

const StNextBtn = styled(Button)<{ disabled: boolean }>`
  margin-top: 10rem;
  padding: 1.6rem 13rem;
  border-radius: 1rem;
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.white400 : theme.colors.orange100)};

  width: 32.5rem;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.gray300 : theme.colors.white)};
  ${({ theme }) => theme.fonts.button};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;

const StLinkWrapper = styled.section`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 25.9rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -9.07%, rgba(194, 195, 204, 0.85) 100%);
`;

const StSignupText = styled.p`
  text-align: center;

  ${({ theme }) => theme.fonts.body0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StButton = styled(Button)`
  width: 32.5rem;
  height: 5.6rem;

  margin-top: 1.2rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
