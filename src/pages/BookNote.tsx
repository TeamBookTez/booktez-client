import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";

import { IcCheckSave, IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator } from "../components/bookNote";
import { Error404, Loading, PopUpExit } from "../components/common";
import { StIcCancelWhite } from "../components/common/styled/NoteModalWrapper";
import { isLoginState, navigatingBookInfoState } from "../utils/atom";
import { PeriNoteTreeNode } from "../utils/dataType";
import { patchBookNote } from "../utils/lib/api";
import { useCheckLoginState } from "../utils/useHooks";

export interface NavigatingBookInfoState {
  reviewId: string;
  title: string;
  fromUrl: string;
  fromSt: number;
}

// 시간이 된다면 keyof 꼭 활용해보기
export interface ObjKey {
  [key: string]: string | string[] | number | boolean;
}

export interface PreNoteData extends ObjKey {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  reviewSt: number;
}

export interface PeriNoteData {
  answerThree: PeriNoteTreeNode;
  reviewSt: number;
}

interface StNoteModalWrapperProps {
  isopen: boolean;
  isdefault: boolean;
  width: number;
}

export default function BookNote() {
  const { pathname } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  const drawerWidthValue = pathname === "/book-note/peri" ? 60 : 39;
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);
  const navigatingBookInfo = useRecoilValue(navigatingBookInfoState);
  const { reviewId, title } = navigatingBookInfo;

  console.log(title);

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isPrevented, setIsPrevented] = useState<boolean>(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerIdx, setDrawerIdx] = useState(1);
  const [isDrawerdefault, setIsDrawerdefault] = useState(true);

  const [openExitModal, setOpenExitModal] = useState<boolean>(false);

  const handleNav = (idx: number) => {
    setNavIndex(idx);
  };

  const handleExit = () => {
    setOpenExitModal(!openExitModal);
  };

  const handleOpenDrawer = (i: number) => {
    setIsDrawerdefault(false);
    setIsDrawerOpen(true);
    setDrawerIdx(i);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  // isPrevented가 사용되는 곳은 다음과 같습니당
  // reviewSt가 2라면 peri로 이동할 수 없게 하기
  // 모든 답변이 채워지지 않으면 다음 단계로 이동할 수 없게 하기
  const handlePrevent = (shouldPrevent: boolean) => {
    setIsPrevented(shouldPrevent);
  };

  // 저장만 하기 - 수정 완료는 아님
  async function saveReview(body: PreNoteData | PeriNoteData) {
    const apiKey = navIndex ? "peri" : "pre";

    patchBookNote(userToken, `/review/${reviewId}/${apiKey}`, body);
  }

  const handleDrawerDefault = () => {
    setIsDrawerdefault(true);
  };

  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    handleExit();
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ""; //deprecated
  };

  const handleSetIsSave = (isTrue: boolean) => {
    setIsSave(isTrue);
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    if (isSave) {
      const saveToast = setTimeout(() => {
        setIsSave(false);
      }, 2000);

      return () => {
        clearTimeout(saveToast);
      };
    }
  }, [isSave]);

  useEffect(() => {
    setNavIndex(initIndex);
  }, [initIndex]);

  return (
    <>
      {reviewId === "-1" ? (
        <Error404 />
      ) : isLoginLoading ? (
        <Loading />
      ) : (
        <StNoteModalWrapper isopen={isDrawerOpen} isdefault={isDrawerdefault} width={drawerWidthValue}>
          {openExitModal && <PopUpExit onExit={handleExit} />}
          <StIcCancelWhite onClick={handleExit} />
          <StBookTitle>{title}</StBookTitle>
          <StNavWrapper>
            <Navigator
              navIndex={navIndex}
              onNav={handleNav}
              isPrevented={isPrevented}
              onSetDrawerAsDefault={handleDrawerDefault}
              onSetIsSave={handleSetIsSave}
            />
            {isSave && (
              <StSave>
                <StIcCheckSave />
                작성한 내용이 저장되었어요.
              </StSave>
            )}
            {isLogin && <StIcSave onClick={() => setIsSave(true)} id="btn_save" />}
          </StNavWrapper>
          <Outlet
            context={[
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
            ]}
          />
          <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
        </StNoteModalWrapper>
      )}
    </>
  );
}

const reducewidth = (width: number) => keyframes`
  0% {
    width: 100%;
    padding-right: 9.5rem;
  }
  100% {
    width: calc(100% - ${width}rem);
    padding-right: 3.4rem;
}
`;

const boostwidth = (width: number) => keyframes`
  0% {
    width: calc(100% - ${width}rem);
    padding-right: 3.4rem;
  }
  100% {
    width: 100%;
    padding-right: 9.5rem;
}
`;

const StNoteModalWrapper = styled.section<StNoteModalWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10rem 9.5rem;
  background-color: ${({ theme }) => theme.colors.white200};

  min-height: 100vh;
  ${({ isopen, isdefault, width }) =>
    isopen
      ? css`
          animation: ${reducewidth(width)} 300ms linear 1;
          animation-fill-mode: forwards;
        `
      : !isdefault &&
        css`
          animation: ${boostwidth(width)} 300ms linear 1;
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
