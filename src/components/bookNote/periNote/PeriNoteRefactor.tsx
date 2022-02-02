import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcAnswerLabel, IcMore, IcPeriAnswer, IcPeriQuestion } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { Question } from "../../../utils/dataType";
import { patchBookNote, useGetPeriNote } from "../../../utils/mock-api/bookNote";
import { Button } from "../../common/styled/Button";
import { Complete, ExButton, StepUp } from "..";
import { StStepModalWrapper } from "../preNote/PreNoteForm";
import PeriModal from "../stepUp/PeriModal";

export default function PeriNote() {
  const [
    isLogin,
    userToken,
    initIndex,
    isSave,
    isPrevented,
    handleIsPrevented,
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

  const handleChangePeri = (key: string, value: string, idxList: number[]) => {
    const newRoot = [...note];

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

    setNote(newRoot);
  };

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
        return handleIsPrevented(false);
      }
      element.answer.forEach((a) => {
        if (a.text === "") {
          return handleIsPrevented(false);
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
      <StNoteForm onSubmit={(e) => e.preventDefault()}>
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
                <StPriQuestionWrapper className="question">
                  <StQuestionIcon />
                  <StPriQuestionInput
                    placeholder="질문을 입력해주세요"
                    key={`q0-${a}`}
                    value={question0.question}
                    onChange={(event) => {
                      handleIsPrevented(event.target.value === "");
                      handleChangePeri("question", event.target.value, [a]);
                    }}
                    autoFocus={isAdded}
                  />
                  <StAddAnswerButton type="button" onClick={() => handleAddPeri([a])}>
                    답변
                  </StAddAnswerButton>
                  <StMoreIcon onClick={handleToggle} />
                  <StMiniMenu menuposition={"isPriQ"}>
                    <StMenuBtn type="button" onClick={() => handleDeletePeri([a])}>
                      삭제
                    </StMenuBtn>
                  </StMiniMenu>
                </StPriQuestionWrapper>
                <StAnswerWrapper className="answer">
                  {question0.answer.map((answer0, b) => (
                    <React.Fragment key={b}>
                      <StPriAnswerWrapper issingle={answer0.children.length !== 0 || question0.answer.length > 1}>
                        <StAnswerIcon />
                        <StPriAnswerInput
                          placeholder="답변을 입력해주세요"
                          key={`a0-${b}`}
                          value={answer0.text}
                          onChange={(event) => {
                            handleIsPrevented(event.target.value === "");
                            handleChangePeri("answer", event.target.value, [a, b]);
                          }}
                          onKeyPress={(event) => handleEnterAdd(event, [a])}
                          autoFocus={!isAdded}
                        />
                        <StMoreIcon onClick={handleToggle} />
                        <StMiniMenu menuposition={"isPriA"}>
                          <StMenuBtn
                            type="button"
                            onClick={(event) => {
                              handleAddPeri([a, b]);
                              handleSelected(event);
                            }}>
                            꼬리질문 추가
                          </StMenuBtn>
                          <StMenuBtn type="button" onClick={() => handleDeletePeri([a, b])}>
                            삭제
                          </StMenuBtn>
                        </StMiniMenu>
                      </StPriAnswerWrapper>
                      <StAnswerContainer>
                        {answer0.children.map((question1, c) => (
                          <StArticle key={c} isFirst={true}>
                            <StQuestionLabelWrapper>
                              <StQuestionLabel bgcolor={theme.colors.orange100}>질문</StQuestionLabel>
                              <StQuestionInputWrapper>
                                <StQuestionInput
                                  placeholder="질문을 입력해주세요"
                                  key={`q1-${c}`}
                                  value={question1.question}
                                  onChange={(event) => handleChangePeri("question", event.target.value, [a, b, c])}
                                  autoFocus={isAdded}
                                />
                                <StAddAnswerButton type="button" onClick={() => handleAddPeri([a, b, c])}>
                                  답변
                                </StAddAnswerButton>
                                <StMoreIcon onClick={handleToggle} />
                                <StMiniMenu>
                                  <StMenuBtn type="button" onClick={() => handleDeletePeri([a, b, c])}>
                                    삭제
                                  </StMenuBtn>
                                </StMiniMenu>
                              </StQuestionInputWrapper>
                            </StQuestionLabelWrapper>
                            {question1.answer.map((answer1, d) => (
                              <React.Fragment key={d}>
                                <StAnswerInputWrapper>
                                  <StAnswerLabel labelcolor={theme.colors.orange100} />
                                  <StAnswerInput
                                    placeholder="답변을 입력해주세요"
                                    key={`a1-${d}`}
                                    value={answer1.text}
                                    onChange={(event) => handleChangePeri("answer", event.target.value, [a, b, c, d])}
                                    onKeyPress={(event) => handleEnterAdd(event, [a, b, c])}
                                    autoFocus={!isAdded}
                                  />
                                  <StMoreIcon onClick={handleToggle} />
                                  <StMiniMenu>
                                    <StMenuBtn
                                      type="button"
                                      onClick={(event) => {
                                        handleAddPeri([a, b, c, d]);
                                        handleSelected(event);
                                      }}>
                                      꼬리질문 추가
                                    </StMenuBtn>
                                    <StMenuBtn type="button" onClick={() => handleDeletePeri([a, b, c, d])}>
                                      삭제
                                    </StMenuBtn>
                                  </StMiniMenu>
                                </StAnswerInputWrapper>
                                {answer1.children.map((question2, e) => (
                                  <StArticle key={e} isFirst={false}>
                                    <StQuestionLabelWrapper>
                                      <StQuestionLabel bgcolor={theme.colors.orange300}>질문</StQuestionLabel>
                                      <StQuestionInputWrapper>
                                        <StQuestionInput
                                          placeholder="질문을 입력해주세요"
                                          key={`q2-${e}`}
                                          value={question2.question}
                                          onChange={(event) =>
                                            handleChangePeri("question", event.target.value, [a, b, c, d, e])
                                          }
                                          autoFocus={isAdded}
                                        />
                                        <StAddAnswerButton type="button" onClick={() => handleAddPeri([a, b, c, d, e])}>
                                          답변
                                        </StAddAnswerButton>
                                        <StMoreIcon onClick={handleToggle} />
                                        <StMiniMenu>
                                          <StMenuBtn type="button" onClick={() => handleDeletePeri([a, b, c, d, e])}>
                                            삭제
                                          </StMenuBtn>
                                        </StMiniMenu>
                                      </StQuestionInputWrapper>
                                    </StQuestionLabelWrapper>
                                    {question2.answer.map((answer2, f) => (
                                      <React.Fragment key={f}>
                                        <StAnswerInputWrapper>
                                          <StAnswerLabel labelcolor={theme.colors.orange300} />
                                          <StAnswerInput
                                            placeholder="답변을 입력해주세요"
                                            key={`a2-${f}`}
                                            value={answer2.text}
                                            onChange={(event) =>
                                              handleChangePeri("answer", event.target.value, [a, b, c, d, e, f])
                                            }
                                            onKeyPress={(event) => handleEnterAdd(event, [a, b, c, d, e])}
                                            autoFocus={!isAdded}
                                          />
                                          <StMoreIcon onClick={handleToggle} />
                                          <StMiniMenu>
                                            <StMenuBtn
                                              type="button"
                                              onClick={(event) => {
                                                handleAddPeri([a, b, c, d, e, f]);
                                                handleSelected(event);
                                              }}>
                                              꼬리질문 추가
                                            </StMenuBtn>
                                            <StMenuBtn
                                              type="button"
                                              onClick={() => handleDeletePeri([a, b, c, d, e, f])}>
                                              삭제
                                            </StMenuBtn>
                                          </StMiniMenu>
                                        </StAnswerInputWrapper>
                                        {answer2.children.map((question3, g) => (
                                          <StArticle key={g} isFirst={false}>
                                            <StQuestionLabelWrapper>
                                              <StQuestionLabel bgcolor={theme.colors.orange400}>질문</StQuestionLabel>
                                              <StQuestionInputWrapper>
                                                <StQuestionInput
                                                  placeholder="질문을 입력해주세요"
                                                  key={`q3-${g}`}
                                                  value={question3.question}
                                                  onChange={(event) =>
                                                    handleChangePeri("question", event.target.value, [
                                                      a,
                                                      b,
                                                      c,
                                                      d,
                                                      e,
                                                      f,
                                                      g,
                                                    ])
                                                  }
                                                  autoFocus={isAdded}
                                                />
                                                <StAddAnswerButton
                                                  type="button"
                                                  onClick={() => handleAddPeri([a, b, c, d, e, f, g])}>
                                                  답변
                                                </StAddAnswerButton>
                                                <StMoreIcon onClick={handleToggle} />
                                                <StMiniMenu>
                                                  <StMenuBtn
                                                    type="button"
                                                    onClick={() => handleDeletePeri([a, b, c, d, e, f, g])}>
                                                    삭제
                                                  </StMenuBtn>
                                                </StMiniMenu>
                                              </StQuestionInputWrapper>
                                            </StQuestionLabelWrapper>
                                            {question3.answer.map((answer3, h) => (
                                              <React.Fragment key={h}>
                                                <StAnswerInputWrapper>
                                                  <StAnswerLabel labelcolor={theme.colors.orange400} />
                                                  <StAnswerInput
                                                    placeholder="답변을 입력해주세요"
                                                    key={`a3-${h}`}
                                                    value={answer3.text}
                                                    onChange={(event) =>
                                                      handleChangePeri("answer", event.target.value, [
                                                        a,
                                                        b,
                                                        c,
                                                        d,
                                                        e,
                                                        f,
                                                        g,
                                                        h,
                                                      ])
                                                    }
                                                    onKeyPress={(event) => handleEnterAdd(event, [a, b, c, d, e, f, g])}
                                                    autoFocus={!isAdded}
                                                  />
                                                  <StMoreIcon onClick={handleToggle} />
                                                  <StMiniMenu>
                                                    <StMenuBtn
                                                      type="button"
                                                      onClick={(event) => {
                                                        handleAddPeri([a, b, c, d, e, f, g, h]);
                                                        handleSelected(event);
                                                      }}>
                                                      꼬리질문 추가
                                                    </StMenuBtn>
                                                    <StMenuBtn
                                                      type="button"
                                                      onClick={() => handleDeletePeri([a, b, c, d, e, f, g, h])}>
                                                      삭제
                                                    </StMenuBtn>
                                                  </StMiniMenu>
                                                </StAnswerInputWrapper>
                                                {answer3.children.map((question4, i) => (
                                                  <StArticle key={i} isFirst={false}>
                                                    <StQuestionLabelWrapper>
                                                      <StQuestionLabel
                                                        bgcolor={theme.colors.orange500}
                                                        color={theme.colors.orange100}>
                                                        질문
                                                      </StQuestionLabel>
                                                      <StQuestionInputWrapper>
                                                        <StQuestionInput
                                                          placeholder="질문을 입력해주세요"
                                                          key={`q3-${i}`}
                                                          value={question4.question}
                                                          onChange={(event) =>
                                                            handleChangePeri("question", event.target.value, [
                                                              a,
                                                              b,
                                                              c,
                                                              d,
                                                              e,
                                                              f,
                                                              g,
                                                              h,
                                                              i,
                                                            ])
                                                          }
                                                          autoFocus={isAdded}
                                                        />
                                                        <StAddAnswerButton
                                                          type="button"
                                                          onClick={() => handleAddPeri([a, b, c, d, e, f, g, h, i])}>
                                                          답변
                                                        </StAddAnswerButton>
                                                        <StMoreIcon onClick={handleToggle} />
                                                        <StMiniMenu>
                                                          <StMenuBtn
                                                            type="button"
                                                            onClick={() =>
                                                              handleDeletePeri([a, b, c, d, e, f, g, h, i])
                                                            }>
                                                            삭제
                                                          </StMenuBtn>
                                                        </StMiniMenu>
                                                      </StQuestionInputWrapper>
                                                    </StQuestionLabelWrapper>
                                                    {question4.answer.map((answer4, j) => (
                                                      <React.Fragment key={j}>
                                                        <StAnswerInputWrapper>
                                                          <StAnswerLabel labelcolor={theme.colors.orange500} />
                                                          <StAnswerInput
                                                            placeholder="답변을 입력해주세요"
                                                            key={`a4-${j}`}
                                                            value={answer4.text}
                                                            onChange={(event) =>
                                                              handleChangePeri("answer", event.target.value, [
                                                                a,
                                                                b,
                                                                c,
                                                                d,
                                                                e,
                                                                f,
                                                                g,
                                                                h,
                                                                i,
                                                                j,
                                                              ])
                                                            }
                                                            onKeyPress={(event) =>
                                                              handleEnterAdd(event, [a, b, c, d, e, f, g, h, i])
                                                            }
                                                            autoFocus={!isAdded}
                                                          />
                                                          <StMoreIcon onClick={handleToggle} />
                                                          <StMiniMenu>
                                                            <StMenuBtn
                                                              type="button"
                                                              onClick={() =>
                                                                handleDeletePeri([a, b, c, d, e, f, g, h, i, j])
                                                              }>
                                                              삭제
                                                            </StMenuBtn>
                                                          </StMiniMenu>
                                                        </StAnswerInputWrapper>
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
              handleIsPrevented(true);
            }}
            disabled={isPrevented}>
            + 질문 리스트 추가
          </StAddQuestionButton>
        </StQAWrapper>
        <StDoneButton type="button" onClick={submitComplete} disabled={isPrevented}>
          작성 완료
        </StDoneButton>
      </StNoteForm>
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

const StPriQuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 2.6rem 4.4rem 2.6rem 8.4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 1.6rem;
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

const StPriQuestionInput = styled.input`
  flex: 1;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StPriAnswerWrapper = styled.div<{ issingle: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${({ issingle, theme }) =>
    issingle
      ? css`
          border-bottom: 0.2rem solid ${theme.colors.white200};
          padding-bottom: 2.8rem;
        `
      : ""}
  padding-top: 2.8rem;
  padding-right: 1.6rem;
  padding-left: 5.6rem;
`;

const StPriAnswerInput = styled.input`
  width: 100%;

  ${({ theme }) => theme.fonts.body1}
  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StAnswerIcon = styled(IcPeriAnswer)`
  position: absolute;
  top: 2.8rem;
  left: 1rem;
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

const StQuestionLabel = styled.label<{ bgcolor: string; color?: string }>`
  margin-right: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.8rem;
  background-color: ${({ bgcolor }) => bgcolor};
  width: fit-content;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
`;

const StQuestionLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StQuestionInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  margin-top: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding-left: 2.4rem;
  padding-right: 1.6rem;
  height: 5.4rem;
`;

const StQuestionInput = styled.input`
  flex: 1;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray200};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StAddAnswerButton = styled.button`
  width: 6.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray400};
`;

const StAnswerInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  margin-top: 1rem;
  margin-left: 7.6rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 1.35rem 1.6rem 0.75rem 2.4rem;
`;

const StAnswerLabel = styled(IcAnswerLabel)<{ labelcolor: string }>`
  position: absolute;
  top: -0.2rem;
  left: -0.2rem;
  fill: ${({ labelcolor }) => labelcolor};
`;

const StAnswerInput = styled.input`
  flex: 1;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray400};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
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

const StMoreIcon = styled(IcMore)`
  &:hover {
    fill: #efefef;
  }
`;

const StMiniMenu = styled.div<{ menuposition?: string }>`
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

const StMenuBtn = styled(Button)`
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
