import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator } from "../components/bookNote";
import PopUpPreDone from "../components/bookNote/preNote/PopUpPreDone";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
import { Question } from "../utils/dataType";
import { getData, patchData } from "../utils/lib/api";

interface ObjKey {
  [key: string]: string | string[] | number;
}

export interface PreNoteData extends ObjKey {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  progress: number;
}

export default function BookNote() {
  // 로그인 및 리뷰 아이디는 규민이가 한 state 넘기는 걸로 받아오기
  const isLogin = true;
  const reviewId = 34;

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const [isPrevented, setIsPrevented] = useState(false);
  const [ablePatch, setAblePatch] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
  const [periNote, setPeriNote] = useState<Question[]>([]);
  const [drawerIdx, setDrawerIdx] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { pathname } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  const handleNav = (idx: number) => {
    setNavIndex(idx);
  };

  const navigate = useNavigate();

  const handleOpenDrawer = (i: number) => {
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

  const getReview = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const { answerOne, answerTwo, answerThree, questionList, reviewState, bookTitle } = data.data;

      // console.log("data", data);
      setPreNote({ answerOne, answerTwo, questionList, progress: reviewState });
      setTitle(bookTitle);

      if (answerThree) {
        setPeriNote(answerThree.root);
      } else {
        setPeriNote([]);
      }

      // 요청에 성공했으나, 답변이 하나라도 채워져있다면 이전에 작성한 적이 있던 것.
      // 답변 추가/삭제 막기
      if (answerOne) {
        setIsPrevented(true);
        setAblePatch(true);
      } else {
        handleChangeReview("questionList", [""]);
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

  // 저장만 하기 - 수정 완료는 아님
  const saveReview = async () => {
    const res = await patchData(userToken, `/review/${reviewId}`, { ...preNote, answerThree: { root: periNote } });

    console.log("saveReview res", res);
  };

  const patchReview = async () => {
    await patchData(userToken, `/review/before/${reviewId}`, preNote);

    if (!isPrevented) {
      const newData: Question[] = [];

      preNote.questionList.map((question) => {
        newData.push({ depth: 1, question, answer: [] });
      });
      setPeriNote(newData);
    }
    setIsPrevented(true);
    // 연결 확인 용
    // console.log("res", res);
  };

  const handleSubmit = () => {
    handleChangeReview("progress", 3);
    patchReview();
    setOpenModal(false);
    navigate("/book-note/peri");
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
    getReview(`/review/${reviewId}`, userToken);
  }, []);

  useEffect(() => {
    console.log("preNote", preNote);
  }, [title]);

  useEffect(() => {
    // 질문 리스트가 비어있으면 다음단계 버튼 비활성화(ablePatch <- false)
    // 그렇지 않으면 true
    if (preNote.answerOne && preNote.answerTwo && !preNote.questionList.includes("")) {
      setAblePatch(true);
    }
  }, [preNote]);

  return (
    <StNoteModalWrapper isopen={isDrawerOpen}>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator navIndex={navIndex} onNav={handleNav} />
        <IcSave onClick={saveReview} />
      </StNavWrapper>
      <Outlet
        context={[
          isLogin,
          handleOpenDrawer,
          preNote,
          handleChangeReview,
          setOpenModal,
          isPrevented,
          ablePatch,
          periNote,
          handleChangePeri,
          handleAddPeri,
          handleDeletePeri,
        ]}
      />
      <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
      {openModal && <PopUpPreDone onSubmit={handleSubmit} onCancel={handleCancel} />}
    </StNoteModalWrapper>
  );
}

export const reducewidth = keyframes`
  0% {
    width: 100%;
    padding: 10rem 9.5rem;
  }
  100% {
    width: calc(100% - 39rem);
    padding: 10rem 3.4rem 10rem 9.5rem;
  }
`;

const StNoteModalWrapper = styled.section<{ isopen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10rem ${({ isopen }) => (isopen ? "3.4rem" : "9.5rem")} 10rem 9.5rem;
  background-color: ${({ theme }) => theme.colors.white200};

  ${({ isopen }) =>
    isopen
      ? css`
          animation: ${reducewidth} 300ms linear 1;
          animation-fill-mode: forwards;
        `
      : ""}
`;

const StNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;

const StBookTitle = styled.h1`
  width: 100%;

  ${({ theme }) => theme.fonts.header0};
`;
