import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcCheckSave, IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator, PopUpPreDone } from "../components/bookNote";
import { Loading, PopUpExit } from "../components/common";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
import { Question } from "../utils/dataType";
import { patchData } from "../utils/lib/api";
import { useGetBookNoteTitle } from "../utils/mock-api/bookNote";

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

export default function BookNoteRefactor() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  const pathKey = initIndex ? "now" : "before";
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  const isLoginState = state as IsLoginState;
  const { isLogin, reviewId, fromUrl } = isLoginState;

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const [title, isLoading, isError] = useGetBookNoteTitle(userToken, "/review/20");

  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
  const [periNote, setPeriNote] = useState<Question[]>([]);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [openExitModal, setOpenExitModal] = useState<boolean>(false);

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isPrevented, setIsPrevented] = useState<boolean>(false);

  const [drawerIdx, setDrawerIdx] = useState(1);

  const handleNav = (idx: number) => {
    setNavIndex(idx);
  };

  const handleExit = () => {
    setOpenExitModal(!openExitModal);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenDrawer = (i: number) => {
    setIsDrawerOpen(true);
    setDrawerIdx(i);
  };

  // 서버에의 저장을 관리
  const patchReview = async (key: string, body: any) => {
    // answerOne, answerTwo, questionList, progress update
    await patchData(userToken, `/review/${key}/${reviewId}`, body);
  };

  // 저장만 하기 - 수정 완료는 아님
  const saveReview = async () => {
    // initIndex가 1이면 progress는 3, 0이면 progress는 2
    const progress = preNote.progress === 4 ? 4 : initIndex + 2;
    const body = pathKey === "before" ? { ...preNote, progress } : { answerThree: { root: periNote }, progress };

    patchReview(pathKey, body);
    setIsSave(true);
  };

  return (
    <StNoteModalWrapper isopen={isDrawerOpen} width={pathname === "/book-note/peri" ? 60 : 39}>
      {openExitModal && <PopUpExit onExit={handleExit} />}
      <StIcCancelWhite onClick={handleExit} />
      <StBookTitle>{title}</StBookTitle>
      <StNavWrapper>
        <Navigator
          navIndex={navIndex}
          onNav={handleNav}
          isLoginState={isLoginState}
          isPrevented={isPrevented}
          isPeriEmpty={!periNote.length}
        />
        {isSave && (
          <StSave>
            <StIcCheckSave />
            작성한 내용이 저장되었어요.
          </StSave>
        )}
        {isLogin && <StIcSave onClick={saveReview} />}
      </StNavWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Outlet context={[isLogin, userToken, handleNav, handleOpenDrawer, handleCloseDrawer]} />
      )}
      /
      <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
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
    isopen &&
    css`
      animation: ${reducewidth(width)} 300ms linear 1;
      animation-fill-mode: forwards;
    `}
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
  right: 4.5rem;

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
