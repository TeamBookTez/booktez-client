import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator } from "../components/bookNote";
import PopUpPreDone from "../components/bookNote/preNote/PopUpPreDone";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
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
  const userToken = "";

  const [isPrevented, setIsPrevented] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
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

  const getReview = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const { answerOne, answerTwo, questionList, reviewState, bookTitle } = data.data;

      setPreNote({ answerOne, answerTwo, questionList, progress: reviewState });
      setTitle(bookTitle);

      // 요청에 성공했으나, 답변이 하나라도 채워져있다면 이전에 작성한 적이 있던 것.
      // 답변 추가/삭제 막기
      if (answerOne) {
        setIsPrevented(true);
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

  const handleChangeReview = (key: string, value: string | string[] | number): void => {
    setPreNote((currentNote) => {
      const newData = { ...currentNote };

      newData[key] = value;

      return newData;
    });
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

  useEffect(() => {
    console.log("isPrevented", isPrevented);
  }, [isPrevented]);

  useEffect(() => {
    getReview(`/review/${REVIEWID}`, userToken);
  }, []);

  return (
    <StNoteModalWrapper isopen={isDrawerOpen}>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator />
        <IcSave onClick={patchReview} />
      </StNavWrapper>
      <Outlet context={[handleOpenDrawer, preNote, handleChangeReview, setOpenModal, isPrevented]} />
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
