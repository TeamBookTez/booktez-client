import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcMore } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { Question } from "../../../utils/dataType";
import { patchBookNote, useGetPeriNote } from "../../../utils/mock-api/bookNote";
import { Button } from "../../common/styled/Button";
import { AddedAnswer, AddedQuestion, Complete, ExButton, PeriModal, PriorAnswer, PriorQuestion, StepUp } from "..";
import { StStepModalWrapper } from "../preNote/PreNoteForm";

interface FormData {
  [key: string]: string;
}

export default function PeriNote() {
  const [
    isLogin,
    userToken,
    initIndex,
    isSave,
    isPrevented,
    handlePrevent,
    handleSaveBody,
    handleOpenDrawer,
    handleCloseDrawer,
  ] =
    useOutletContext<
      [
        boolean,
        string,
        number,
        boolean,
        boolean,
        (shouldPrevent: boolean) => void,
        <T>(body: T) => void,
        (i: number) => void,
        () => void,
      ]
    >();

  const methods = useForm();
  const { register, handleSubmit } = methods;
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  const [periNote] = useGetPeriNote(userToken, "/peri/20");

  const [note, setNote] = useState<Question[]>([]);

  const [isAdded, setIsAdded] = useState(true);
  const [isPeriModal, setIsPeriModal] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [bookData, setBookData] = useState({
    authors: ["테스트령"],
    publicationDt: "2022년 2월 1일",
    thumbnail: "https://bookstairs-bucket.s3.amazonaws.com/user_profile/1642340891758.jpg",
    title: "테스트 책 제목",
    translators: ["령좜언귬"],
  });

  // 꼬리 질문 추가에서는 질문에만 focus가 되도록 answer에는 autoFocus가 반대로 적용되어 있음
  // Enter에 대해서, 즉 답변만 추가될 때는 답변에만 focus가 되도록 하기
  const handleAutoFocus = () => {
    setIsAdded(false);
  };

  // 똥페리 switch문
  const handleAddPeri = (idxList: number[]) => {
    const newRoot = [...note];

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

    setNote(newRoot);
    setIsAdded(true);
  };

  const handleDeletePeri = (idxList: number[]) => {
    const newRoot = [...note];

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

    setNote(newRoot);
  };

  const handlePeriCarousel = () => {
    setIsPeriModal(!isPeriModal);
  };

  const submitReview = async (isComplete: boolean) => {
    handleCloseDrawer();
    const progress = isComplete ? 4 : 3;

    await patchBookNote(userToken, "/peri/20", { answerThree: { root: note }, progress });

    // 실제 서버 사용시 patch 후 넘어오는 response body의 bookdata를 setBookData에 넣기
    // setBookData({
    //   authors: ["테스트령"],
    //   publicationDt: "2022년 2월 1일",
    //   thumbnail: "https://bookstairs-bucket.s3.amazonaws.com/user_profile/1642340891758.jpg",
    //   title: "테스트 책 제목",
    //   translators: ["령좜언귬"],
    // });
  };

  const handleToggle = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const miniMenu = e.currentTarget.nextElementSibling;

    if (miniMenu === null || miniMenu === undefined) return;
    if (!(miniMenu instanceof HTMLElement)) return;

    const whatValue = miniMenu.style.display;

    if (whatValue === "none") miniMenu.style.display = "block";
    else miniMenu.style.display = "none";
  };

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const menuBtn = e.currentTarget.parentElement;

    if (menuBtn === null || menuBtn === undefined) return;
    if (!(menuBtn instanceof HTMLElement)) return;

    const whatValue = menuBtn.style.display;

    if (whatValue !== "none") menuBtn.style.display = "none";
  };

  const handleEnterAdd = (event: React.KeyboardEvent<HTMLInputElement>, idxList: number[]) => {
    if (event.key === "Enter") {
      handleAddPeri(idxList);
      handleAutoFocus();
    }
  };

  const submitComplete = () => {
    submitReview(true);
    setIsComplete(true);
  };

  useEffect(() => {
    note.forEach((element) => {
      if (element.question !== "") {
        return handlePrevent(false);
      }
      element.answer.forEach((a) => {
        if (a.text === "") {
          return handlePrevent(false);
        }
      });
    });

    const inputList = document.getElementsByTagName("input");

    for (let i = 0; i < inputList.length; i++) {
      if (i === 1) {
        inputList[1].focus();
      } else {
        inputList[i].blur();
      }
    }
  }, []);

  useEffect(() => {
    setNote(periNote.answerThree.root);
  }, [periNote]);

  useEffect(() => {
    if (initIndex && isSave) {
      handleSaveBody({ answerThree: { root: note }, progress: 3 });
    }
  }, [isSave]);

  return (
    <>
      <FormProvider {...methods}>
        <StNoteForm onSubmit={onSubmit}>
          <StLabelWrapper>
            <StLabelContainer>
              <StLabel>질문 리스트를 구조화하며 책을 읽어보세요.</StLabel>
              <StepUp onToggleModal={handlePeriCarousel} />
            </StLabelContainer>
            <ExButton idx={4} onOpenDrawer={handleOpenDrawer} />
          </StLabelWrapper>
          <StQAWrapper>
            {note.length &&
              note.map((question0, a) => (
                <StQAContainer key={a}>
                  <PriorQuestion
                    idx={a}
                    question={question0.question}
                    onPrevent={handlePrevent}
                    isAdded={isAdded}
                    onAddAnswer={handleAddPeri}
                    onToggle={handleToggle}
                    onDeleteQuestion={handleDeletePeri}
                  />
                  <StAnswerWrapper className="answer">
                    {question0.answer.map((answer0, b) => (
                      <React.Fragment key={b}>
                        <PriorAnswer
                          isSingle={answer0.children.length !== 0 || question0.answer.length > 1}
                          idxList={[a, b]}
                          isAdded={isAdded}
                          onAddAnswerByEnter={handleEnterAdd}
                          onAddAnswer={handleAddPeri}
                          onToggle={handleToggle}
                          onDeleteQuestion={handleDeletePeri}
                          onSelected={handleSelected}
                        />
                        <StAnswerContainer>
                          {answer0.children.map((question1, c) => (
                            <StArticle key={c} isFirst={true}>
                              <AddedQuestion
                                bgColor={theme.colors.orange100}
                                idxList={[a, b, c]}
                                isAdded={isAdded}
                                onAddAnswer={handleAddPeri}
                                onToggle={handleToggle}
                                onDeleteQuestion={handleDeletePeri}
                              />
                              {question1.answer.map((answer1, d) => (
                                <React.Fragment key={d}>
                                  <AddedAnswer
                                    labelColor={theme.colors.orange100}
                                    idxList={[a, b, c, d]}
                                    isAdded={isAdded}
                                    onAddAnswerByEnter={handleEnterAdd}
                                    onToggle={handleToggle}
                                    onAddQuestion={handleAddPeri}
                                    onSelected={handleSelected}
                                    onDeleteAnswer={handleDeletePeri}
                                  />
                                  {answer1.children.map((question2, e) => (
                                    <StArticle key={e} isFirst={false}>
                                      <AddedQuestion
                                        bgColor={theme.colors.orange300}
                                        idxList={[a, b, c, d, e]}
                                        isAdded={isAdded}
                                        onAddAnswer={handleAddPeri}
                                        onToggle={handleToggle}
                                        onDeleteQuestion={handleDeletePeri}
                                      />
                                      {question2.answer.map((answer2, f) => (
                                        <React.Fragment key={f}>
                                          <AddedAnswer
                                            labelColor={theme.colors.orange300}
                                            idxList={[a, b, c, d, e, f]}
                                            isAdded={isAdded}
                                            onAddAnswerByEnter={handleEnterAdd}
                                            onToggle={handleToggle}
                                            onAddQuestion={handleAddPeri}
                                            onSelected={handleSelected}
                                            onDeleteAnswer={handleDeletePeri}
                                          />
                                          {answer2.children.map((question3, g) => (
                                            <StArticle key={g} isFirst={false}>
                                              <AddedQuestion
                                                bgColor={theme.colors.orange400}
                                                idxList={[a, b, c, d, e, f, g]}
                                                isAdded={isAdded}
                                                onAddAnswer={handleAddPeri}
                                                onToggle={handleToggle}
                                                onDeleteQuestion={handleDeletePeri}
                                              />
                                              {question3.answer.map((answer3, h) => (
                                                <React.Fragment key={h}>
                                                  <AddedAnswer
                                                    labelColor={theme.colors.orange400}
                                                    idxList={[a, b, c, d, e, f, g, h]}
                                                    isAdded={isAdded}
                                                    onAddAnswerByEnter={handleEnterAdd}
                                                    onToggle={handleToggle}
                                                    onAddQuestion={handleAddPeri}
                                                    onSelected={handleSelected}
                                                    onDeleteAnswer={handleDeletePeri}
                                                  />
                                                  {answer3.children.map((question4, i) => (
                                                    <StArticle key={i} isFirst={false}>
                                                      <AddedQuestion
                                                        bgColor={theme.colors.orange500}
                                                        idxList={[a, b, c, d, e, f, g, h, i]}
                                                        isAdded={isAdded}
                                                        onAddAnswer={handleAddPeri}
                                                        onToggle={handleToggle}
                                                        onDeleteQuestion={handleDeletePeri}
                                                      />
                                                      {question4.answer.map((answer4, j) => (
                                                        <React.Fragment key={j}>
                                                          <AddedAnswer
                                                            labelColor={theme.colors.orange500}
                                                            idxList={[a, b, c, d, e, f, g, h, i, j]}
                                                            isAdded={isAdded}
                                                            onAddAnswerByEnter={handleEnterAdd}
                                                            onToggle={handleToggle}
                                                            onAddQuestion={handleAddPeri}
                                                            onSelected={handleSelected}
                                                            onDeleteAnswer={handleDeletePeri}
                                                          />
                                                        </React.Fragment>
                                                      ))}
                                                    </StArticle>
                                                  ))}
                                                </React.Fragment>
                                              ))}
                                            </StArticle>
                                          ))}
                                        </React.Fragment>
                                      ))}
                                    </StArticle>
                                  ))}
                                </React.Fragment>
                              ))}
                            </StArticle>
                          ))}
                        </StAnswerContainer>
                      </React.Fragment>
                    ))}
                  </StAnswerWrapper>
                </StQAContainer>
              ))}
            <StAddQuestionButton
              type="button"
              onClick={() => {
                handleAddPeri([]);
                handlePrevent(true);
              }}
              disabled={isPrevented}>
              + 질문 리스트 추가
            </StAddQuestionButton>
          </StQAWrapper>
          <StDoneButton onClick={submitComplete} disabled={isPrevented}>
            작성 완료
          </StDoneButton>
        </StNoteForm>
      </FormProvider>
      {isPeriModal && (
        <StStepModalWrapper>
          <PeriModal onToggleModal={handlePeriCarousel} />
        </StStepModalWrapper>
      )}
      {isComplete && <Complete bookData={bookData} isLoginState={{ reviewId: 20, isLogin, fromUrl: "" }} />}
    </>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  max-height: fit-content;
`;

const StLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.6rem 0 4.6rem 2rem;
`;

const StLabelContainer = styled.div`
  display: flex;
`;

const StLabel = styled.label`
  margin-left: 2rem;
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StQAWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const StQAContainer = styled.section`
  display: flex;
  flex-direction: column;

  &:focus-within {
    > .question {
      border-bottom: 0.1rem solid;
      border-color: ${({ theme }) => theme.colors.orange100};
    }

    > .answer {
      border-color: ${({ theme }) => theme.colors.orange100};
    }
  }
`;

export const StAddAnswerButton = styled.button`
  width: 6.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray400};
`;

const StAnswerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-top: none;
  border-radius: 0.8rem;
  padding: 2.8rem;
  padding-top: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StAnswerContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const StArticle = styled.article<{ isFirst: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isFirst }) =>
    isFirst
      ? ""
      : css`
          margin-left: 7.6rem;
        `}
`;

const StAddQuestionButton = styled(Button)<{ disabled: boolean }>`
  margin-top: 1rem;
  padding: 2.35rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;

  width: 100%;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.white500 : theme.colors.gray100)};
  ${({ theme }) => theme.fonts.button}
`;

const StDoneButton = styled(Button)<{ disabled: boolean }>`
  margin-top: 6rem;
  margin-left: auto;
  border-radius: 1rem;

  width: 32.5rem;
  height: 5.6rem;
  ${({ theme }) => theme.fonts.button}

  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.white400 : theme.colors.orange100)};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.gray300 : theme.colors.white)};
`;

export const StMoreIcon = styled(IcMore)`
  &:hover {
    fill: #efefef;
  }
`;

export const StMiniMenu = styled.div<{ menuposition?: string }>`
  display: none;

  position: absolute;
  top: ${({ menuposition }) => (menuposition === "isPriQ" ? "6rem" : menuposition === "isPriA" ? "2.9rem" : "4.3rem")};
  right: ${({ menuposition }) => (menuposition === "isPriQ" ? "4.4rem" : "1.6rem")};
  z-index: 10;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 0.8rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StMenuBtn = styled(Button)`
  border-radius: 0.8rem;
  background-color: transparent;
  width: 9.5rem;
  height: 3.8rem;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white300};
  }
`;
