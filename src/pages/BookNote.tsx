import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { IcCheckSave, IcSave } from "../assets/icons";
import { DrawerWrapper, Navigator, PopUpPreDone } from "../components/bookNote";
import { Loading, PopUpExit } from "../components/common";
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

  // 현재 페이지를 확인하여 navigator를 움직이고 patch할 때 필요한 아이들
  const { pathname, state } = useLocation();
  const initIndex = pathname === "/book-note/peri" ? 1 : 0;
  const drawerWidthValue = pathname === "/book-note/peri" ? 60 : 39;
  const pathKey = initIndex ? "now" : "before";
  const [navIndex, setNavIndex] = useState<number>(initIndex);

  // recoil로 관리하면 어떨까?
  const isLoginState = state as IsLoginState;
  const { isLogin, reviewId, fromUrl } = isLoginState;

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  // pre/peri note 데이터가 들어갈 곳
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
  const [periNote, setPeriNote] = useState<Question[]>([]);
  const [title, setTitle] = useState<string>("");

  const [isPrevented, setIsPrevented] = useState<boolean>(false);
  const [ablePatch, setAblePatch] = useState<boolean>(false);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [openExitModal, setOpenExitModal] = useState<boolean>(false);

  const [drawerIdx, setDrawerIdx] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isAdded, setIsAdded] = useState<boolean>(true);

  const handleNav = (idx: number) => {
    setNavIndex(idx);
  };

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

  const getReview = async () => {
    // get 요청 시작할 시 loading 시작
    setIsLoading(true);
    try {
      // 비회원인 경우, 로컬스토리지에서 책 정보를 불러옴
      if (!isLogin) {
        const localData = localStorage.getItem("booktez-bookData");
        const bookTitle = localData ? JSON.parse(localData).title : "";

        setTitle(bookTitle);
      } else {
        const { data } = await getData(`/review/${reviewId}`, userToken);

        const { answerOne, answerTwo, answerThree, questionList, reviewState, bookTitle } = data.data;
        const questions: string[] = questionList.length ? questionList : [""];

        setTitle(bookTitle);
        setPreNote({ answerOne, answerTwo, questionList: questions, progress: reviewState });

        // console.log("answerThree", answerThree);
        // answerThree가 null이 아닌 경우
        if (answerThree) {
          setPeriNote(answerThree.root);
        } else {
          // answerThree가 비어있을 때(null) 독서 전의 질문 동기화
          // 한 번 동기화되고 나서는 빈 상태가 아니라서 동기화되지 않음
          const defaultQuestions: Question[] = [];

          questions.map((question: string) =>
            defaultQuestions.push({ depth: 1, question, answer: [{ text: "", children: [] }] }),
          );
          setPeriNote(defaultQuestions);
        }

        // 독서 중으로 넘어간 경우
        if (reviewState > 2) {
          setIsPrevented(true);
          setAblePatch(true);
        }
      }
    } catch (err) {
      return;
    }
    // get 요청이 끝날 시 loading 끝
    setIsLoading(false);
  };

  // 서버에의 저장을 관리
  const patchReview = async (
    key: string,
    body:
      | {
          progress: number;
          answerOne: string;
          answerTwo: string;
          questionList: string[];
          answerThree?: undefined;
        }
      | {
          answerThree: {
            root: Question[];
          };
          progress: number;
        },
  ) => {
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

  // 독서 중으로 넘어가기 - 모달 내 '다음' 버튼 - 수정 완료
  const handleSubmit = async () => {
    handleChangeReview("progress", 3);
    patchReview(pathKey, { ...preNote, progress: 3 });
    // 현재 periNote의 내용을 저장해야 함
    patchReview("now", { answerThree: { root: periNote }, progress: 3 });
    setIsPrevented(true);

    // 현재 모달 닫기
    setOpenModal(false);
    // 드로워 닫기
    setIsDrawerOpen(false);

    if (preNote.progress === 2) {
      const defaultQuestions: Question[] = [];

      preNote.questionList.map((question: string) =>
        defaultQuestions.push({ depth: 1, question, answer: [{ text: "", children: [] }] }),
      );
      setPeriNote(defaultQuestions);
    }

    // peri로 넘어가기
    navigate("/book-note/peri", { state: isLoginState });
    // navigator 변경
    handleNav(1);
  };

  // 모달 내 '취소' 버튼 - 모달을 끄는 용도
  const handleCancel = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const saveToast = setTimeout(() => {
      setIsSave(false);
    }, 2000);

    return () => {
      clearTimeout(saveToast);
    };
  }, [saveReview]);

  // 똥페리 switch문
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
        newRoot[idxList[0]].answer[idxList[1]].children.push({
          depth: 2,
          question: "",
          answer: [{ text: "", children: [] }],
        });
        break;
      case 3:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer.push({ text: "", children: [] });
        break;
      case 4:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children.push({
          depth: 2,
          question: "",
          answer: [{ text: "", children: [] }],
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
        ].children.push({ depth: 3, question: "", answer: [{ text: "", children: [] }] });
        break;
      case 7:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer.push({ text: "", children: [] });
        break;
      case 8:
        newRoot[idxList[0]].answer[idxList[1]].children[idxList[2]].answer[idxList[3]].children[idxList[4]].answer[
          idxList[5]
        ].children[idxList[6]].answer[idxList[7]].children.push({
          depth: 4,
          question: "",
          answer: [{ text: "", children: [] }],
        });
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
          answer: [{ text: "", children: [] }],
        });
        break;
    }

    setPeriNote(newRoot);
    setIsAdded(true);
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

  const handleExit = () => {
    setOpenExitModal(!openExitModal);
  };

  // 꼬리 질문 추가에서는 질문에만 focus가 되도록 answer에는 autoFocus가 반대로 적용되어 있음
  // Enter에 대해서, 즉 답변만 추가될 때는 답변에만 focus가 되도록 하기
  const handleAutoFocus = () => {
    setIsAdded(false);
  };

  useEffect(() => {
    // 질문 리스트가 비어있으면 다음단계 버튼 비활성화(ablePatch <- false)
    // 그렇지 않으면 true
    if (preNote.answerOne && preNote.answerTwo && !preNote.questionList.includes("")) {
      setAblePatch(true);
    } else {
      setAblePatch(false);
    }
  }, [preNote]);

  useEffect(() => {
    getReview();
  }, []);

  return (
    <StNoteModalWrapper isopen={isDrawerOpen} width={drawerWidthValue}>
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
            userToken,
            fromUrl,
            reviewId,
            isAdded,
            handleAutoFocus,
          ]}
        />
      )}
      <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
      {openModal && <PopUpPreDone onSubmit={handleSubmit} onCancel={handleCancel} />}
    </StNoteModalWrapper>
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

const StNoteModalWrapper = styled.section<{ isopen: boolean; width: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10rem 9.5rem;
  background-color: ${({ theme }) => theme.colors.white200};

  min-height: 100vh;
  ${({ isopen, width }) =>
    isopen &&
    css`
      animation: ${reducewidth(width)} 300ms linear 1;
      animation-fill-mode: forwards;
    `}
  ${({ isopen, width }) =>
    !isopen &&
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
