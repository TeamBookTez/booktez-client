import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
  const REVIEWID = 4;
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

      setPreNote({ answerOne, answerTwo, questionList, progress: reviewState });
      setPeriNote(answerThree.root);
      setTitle(bookTitle);

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

  const patchReview = async () => {
    const res = await patchData(userToken, `/review/before/${REVIEWID}`, preNote);

    setIsPrevented(true);
    // 연결 확인 용
    console.log("res", res);
  };

  const handleSubmit = () => {
    handleChangeReview("progress", 3);
    patchReview();
    setOpenModal(false);
    navigate("/book-note/peri");
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
    }

    setPeriNote(newRoot);
  };

  useEffect(() => {
    getReview(`/review/${REVIEWID}`, userToken);
  }, []);

  useEffect(() => {
    // console.log("preNote.answerOne", preNote.answerOne);
    // console.log("preNote.answerTwo", preNote.answerTwo);
    // console.log("preNote.questionList", !preNote.questionList.includes(""));
    // console.log("ablePatch", ablePatch);

    if (preNote.answerOne && preNote.answerTwo && !preNote.questionList.includes("")) {
      setAblePatch(true);
    }
  }, [preNote]);

  return (
    <StNoteModalWrapper isopen={isDrawerOpen}>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator />
        <IcSave onClick={patchReview} />
      </StNavWrapper>
      <Outlet
        context={[
          handleOpenDrawer,
          preNote,
          handleChangeReview,
          setOpenModal,
          isPrevented,
          ablePatch,
          periNote,
          handleChangePeri,
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
