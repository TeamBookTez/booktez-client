import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator } from "../components/bookNote";
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
  // const userToken = TOKEN ? TOKEN : "";
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjQyNDkyODY5LCJleHAiOjE2NDM3MDI0Njl9.FRHTfkfUGboCitLFsWKDXgVGQT4pLGR16_JZ3mUAJGM";

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
    const { data } = await getData(key, token);
    const { answerOne, answerTwo, questionList, reviewState, bookTitle } = data.data;

    setPreNote({ answerOne, answerTwo, questionList, progress: reviewState });
    setTitle(bookTitle);
  };

  const patchReview = async () => {
    const res = await patchData(userToken, `/review/before/${REVIEWID}`, preNote);

    // 연결 확인 용
    console.log("res", res);
  };

  function handleChangeReview(key: string, value: string | string[] | number): void {
    setPreNote((currentNote) => {
      const newData = { ...currentNote };

      newData[key] = value;

      return newData;
    });
  }

  useEffect(() => {
    console.log("isDrawerOpen", isDrawerOpen);
  }, [isDrawerOpen]);

  useEffect(() => {
    if (userToken) {
      getReview(`/review/${REVIEWID}`, userToken);
    }
  }, []);

  useEffect(() => {
    console.log("preNote", preNote);
  }, [preNote]);

  return (
    <StNoteModalWrapper isopen={isDrawerOpen}>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator />
        <IcSave />
      </StNavWrapper>
      <Outlet context={[handleOpenDrawer, preNote, handleChangeReview, patchReview]} />
      <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
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
