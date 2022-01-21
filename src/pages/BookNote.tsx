import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcCheckSave, IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator, PopUpPreDone } from "../components/bookNote";
import { PopUpExit } from "../components/common";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
import { Question } from "../utils/dataType";
import { getData, patchData } from "../utils/lib/api";

interface ObjKey {
  [key: string]: string | string[] | number;
}

export interface IsLoginState {
  isLogin: boolean;
  reviewId: number;
  fromUrl: string;
}

export interface PreNoteData extends ObjKey {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  progress: number;
}

export default function BookNote() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  const isLoginState = state as IsLoginState;
  const { isLogin, reviewId, fromUrl } = isLoginState;

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const [isPrevented, setIsPrevented] = useState<boolean>(false);
  const [ablePatch, setAblePatch] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
  const [periNote, setPeriNote] = useState<Question[]>([]);
  const [drawerIdx, setDrawerIdx] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSave, setIsSave] = useState<boolean>(false);

  const handleNav = (idx: number) => {
    setNavIndex(idx);
  };

  const handleToggleDrawer = (i: number) => {
    setIsDrawerOpen(true);
    setDrawerIdx(i);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleChangeReview = (key: string, value: string | string[] | number): void => {
    setPreNote((currentNote) => {
      const newData = { ...currentNote };

      newData[key] = value;

      return newData;
    });
  };

  const getReview = async () => {
    try {
      if (!isLogin) {
        const localData = localStorage.getItem("booktez-data");
        const bookTitle = localData ? JSON.parse(localData).title : "";

        setTitle(bookTitle);
      } else {
        const { data } = await getData(`/review/${reviewId}`, userToken);
        const { answerOne, answerTwo, answerThree, questionList, reviewState, bookTitle } = data.data;
        const questions = questionList.length ? questionList : [""];

        setPreNote({ answerOne, answerTwo, questionList: questions, progress: reviewState });
        setTitle(bookTitle);

        if (answerThree) {
          setPeriNote(answerThree.root);
        } else {
          setPeriNote([]);
        }

        // 요청에 성공했으나, 답변이 하나라도 채워져있다면 이전에 작성한 적이 있던 것.
        // 답변 추가/삭제 막기
        if (answerOne && answerTwo && questionList.length) {
          setIsPrevented(true);
          setAblePatch(true);
        } else {
          handleChangeReview("questionList", [""]);
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }

      // 이건 필요없을지도 모름.
      // 담에 한 번 확인
      setIsPrevented(false);
    }
  };

  const syncQuestion = () => {
    if (!isPrevented) {
      const newData: Question[] = [];

      preNote.questionList.map((question) => {
        newData.push({ depth: 1, question, answer: [{ text: "", children: [] }] });
      });
      setPeriNote(newData);
    }
  };

  // 저장만 하기 - 수정 완료는 아님
  const saveReview = async () => {
    const { answerOne, answerTwo } = preNote;

    await patchData(userToken, `/review/${reviewId}`, {
      answerOne,
      answerTwo,
      answerThree: { root: periNote },
    });

    setIsSave(true);
  };

  useEffect(() => {
    const saveToast = setTimeout(() => {
      setIsSave(false);
    }, 2000);

    return () => {
      clearTimeout(saveToast);
    };
  }, [saveReview]);

  const patchReview = async () => {
    await patchData(userToken, `/review/before/${reviewId}`, preNote);
    syncQuestion();
    setIsPrevented(true);
  };

  const handleSubmit = () => {
    handleChangeReview("progress", 3);
    patchReview();
    setOpenModal(false);
    setIsDrawerOpen(false);
    navigate("/book-note/peri", { state: isLoginState });
    handleNav(1);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleChangePeri = (key: string, value: string, idxList: number[]) => {
    const newRoot = [...periNote];

    switch (idxList.length) {
      case 1:
        newRoot[idxList[0]][key] = value;
        break;
      case 2:
        newRoot[idxList[0]].answer[idxList[1]].text = value;
        break;
      case 3:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]][key] = value;
        break;
      case 4:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].text = value;
        break;
      case 5:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]][key] =
          value;
        break;
      case 6:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].text = value;
        break;
      case 7:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]][key] = value;
        break;
      case 8:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].text = value;
        break;
      case 9:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children[idxList[8]][key] = value;
        break;
      case 10:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children[idxList[8]].answer[idxList[9]].text = value;
        break;
    }

    setPeriNote(newRoot);
  };

  const handleAddPeri = (idxList: number[]) => {
    const newRoot = [...periNote];

    switch (idxList.length) {
      default:
        newRoot.push({ depth: 1, question: "", answer: [{ text: "", children: [] }] });
        break;
      case 1:
        newRoot[idxList[0]].answer.push({ text: "", children: [] });
        break;
      case 2:
        newRoot[idxList[0]].answer[idxList[1]].children.push({ depth: 2, question: "", answer: [] });
        break;
      case 3:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer.push({ text: "", children: [] });
        break;
      case 4:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children.push({
          depth: 2,
          question: "",
          answer: [],
        });
        break;
      case 5:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer.push(
          { text: "", children: [] },
        );
        break;
      case 6:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children.push({ depth: 3, question: "", answer: [] });
        break;
      case 7:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer.push({ text: "", children: [] });
        break;
      case 8:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children.push({ depth: 4, question: "", answer: [] });
        break;
      case 9:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children[idxList[8]].answer.push({ text: "", children: [] });
        break;
      case 10:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children[idxList[8]].answer[idxList[9]].children.push({
          depth: 5,
          question: "",
          answer: [],
        });
        break;
    }

    setPeriNote(newRoot);
  };

  const handleDeletePeri = (idxList: number[]) => {
    const newRoot = [...periNote];

    switch (idxList.length) {
      case 1:
        newRoot.splice(idxList[0], 1);
        break;
      case 2:
        newRoot[idxList[0]].answer.splice(idxList[1], 1);
        break;
      case 3:
        newRoot[idxList[0]].answer[idxList[1]].children.splice(idxList[2], 1);
        break;
      case 4:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer.splice(idxList[3], 1);
        break;
      case 5:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children.splice(idxList[4], 1);
        break;
      case 6:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[
          idxList[4]
        ].answer.splice(idxList[5], 1);
        break;
      case 7:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children.splice(idxList[6], 1);
        break;
      case 8:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer.splice(idxList[7], 1);
        break;
      case 9:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children.splice(idxList[8], 1);
        break;
      case 10:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children[idxList[8]].answer.splice(idxList[9], 1);
        break;
    }

    setPeriNote(newRoot);
  };

  useEffect(() => {
    // 질문 리스트가 비어있으면 다음단계 버튼 비활성화(ablePatch <- false)
    // 그렇지 않으면 true
    if (preNote.answerOne && preNote.answerTwo && !preNote.questionList.includes("")) {
      setAblePatch(true);
    }
  }, [preNote]);

  useEffect(() => {
    getReview();
  }, []);

  const [openExitModal, setOpenExitModal] = useState<boolean>(false);
  const handleExit = () => {
    setOpenExitModal(!openExitModal);
  };

  return (
    <StNoteModalWrapper isopen={isDrawerOpen} width={pathname === "/book-note/peri" ? 60 : 39}>
      {openExitModal && <PopUpExit onExit={handleExit} />}
      <StIcCancelWhite onClick={handleExit} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator navIndex={navIndex} onNav={handleNav} isLoginState={isLoginState} isPrevented={isPrevented} />
        {isSave && (
          <StSave>
            <StIcCheckSave />
            작성한 내용이 저장되었어요.
          </StSave>
        )}
        <StIcSave onClick={saveReview} />
      </StNavWrapper>
      <Outlet
        context={[
          isLogin,
          handleToggleDrawer,
          preNote,
          handleChangeReview,
          setOpenModal,
          isPrevented,
          ablePatch,
          periNote,
          handleChangePeri,
          handleAddPeri,
          handleDeletePeri,
          userToken,
          fromUrl,
        ]}
      />
      <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
      {openModal && <PopUpPreDone onSubmit={handleSubmit} onCancel={handleCancel} />}
    </StNoteModalWrapper>
  );
}

export const reducewidth = (width: number) => keyframes`
  0% {
    width: 100%;
    padding: 10rem 9.5rem;
  }
  100% {
    width: calc(100% - ${width}rem);
    padding: 10rem 3.4rem 10rem 9.5rem;
  }
`;

const StNoteModalWrapper = styled.section<{ isopen: boolean; width: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10rem ${({ isopen }) => (isopen ? "3.4rem" : "9.5rem")} 10rem 9.5rem;
  background-color: ${({ theme }) => theme.colors.white200};

  min-height: 100vh;
  ${({ isopen, width }) =>
    isopen
      ? css`
          animation: ${reducewidth(width)} 300ms linear 1;
          animation-fill-mode: forwards;
        `
      : ""}
`;

const StNavWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 4.8rem;

  margin-top: 4.3rem;
`;

const StBookTitle = styled.h1`
  width: 100%;

  ${({ theme }) => theme.fonts.header0};
`;

const StIcCheckSave = styled(IcCheckSave)`
  margin-right: 1rem;
`;

const StSave = styled.div`
  position: absolute;
  left: 76%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 23.7rem;
  height: 3.8rem;

  margin-bottom: 0.5rem;
  margin-right: 1.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.14);

  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StIcSave = styled(IcSave)`
  cursor: pointer;
`;
