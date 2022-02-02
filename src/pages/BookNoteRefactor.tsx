import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcCheckSave, IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator } from "../components/bookNote";
import { Loading, PopUpExit } from "../components/common";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
import { Question } from "../utils/dataType";
import { patchBookNote, useGetBookNoteTitle } from "../utils/mock-api/bookNote";

export interface IsLoginState {
  isLogin: boolean;
  reviewId: number;
  fromUrl: string;
}

// 시간이 된다면 keyof 꼭 활용해보기
interface ObjKey {
  [key: string]: string | string[] | number;
}

export interface PreNoteData extends ObjKey {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  progress: number;
}

interface PeriNoteData {
  answerThree: { root: Question[] };
  progress: number;
}

export default function BookNoteRefactor() {
  const { pathname, state } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  // const pathKey = initIndex ? "now" : "before";
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  // recoil로 관리했으면 하는 부분
  const isLoginState = state as IsLoginState;
  const { isLogin, reviewId, fromUrl } = isLoginState;

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const [title, isLoading] = useGetBookNoteTitle(userToken, "/review/20");
  const [saveBody, setSaveBody] = useState<PreNoteData | PeriNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [openExitModal, setOpenExitModal] = useState<boolean>(false);

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isPrevented, setIsPrevented] = useState<boolean>(true);

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

  // 임시 저장에 들어갈 body를 설정해주는 함수
  // extends 부분이 맘에 들지 않음 완벽한 제네릭 구현 필요
  function handleSaveBody<T extends PreNoteData>(body: T) {
    setSaveBody(body);
  }

  // isPrevented가 사용되는 곳은 다음과 같습니당
  // progress가 2라면 peri로 이동할 수 없게 하기
  // 모든 답변이 채워지지 않으면 다음 단계로 이동할 수 없게 하기
  const handleIsPrevented = (shouldPrevent: boolean) => {
    setIsPrevented(shouldPrevent);
  };

  // 저장만 하기 - 수정 완료는 아님
  const saveReview = async () => {
    const apiKey = initIndex ? "peri" : "pre";

    patchBookNote(userToken, `/${apiKey}/20`, saveBody);
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
        {isLogin && <StIcSave onClick={saveReview} />}
      </StNavWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Outlet
          context={[
            isLogin,
            userToken,
            initIndex,
            isSave,
            isPrevented,
            handleIsPrevented,
            handleSaveBody,
            handleNav,
            handleOpenDrawer,
            handleCloseDrawer,
          ]}
        />
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
