import { String } from "lodash";
import React from "react";
import { useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcAnswerLabel, IcMore, IcPeriAnswer, IcPeriQuestion } from "../../../assets/icons";
import { PreNoteData } from "../../../pages/BookNote";
import theme from "../../../styles/theme";
import { Answer, Question } from "../../../utils/dataType";
import { StepUp } from "..";

export default function PeriNote() {
  const [
    handleOpenDrawer,
    preNote,
    handleChangeReview,
    setOpenModal,
    isPrevented,
    ablePatch,
    periNote,
    handleChangePeri,
  ] =
    useOutletContext<
      [
        (i: number) => void,
        PreNoteData,
        (key: string, value: string | string[] | number) => void,
        React.Dispatch<React.SetStateAction<boolean>>,
        boolean,
        boolean,
        Question[],
        (key: string, value: string, idxList: number[]) => void,
      ]
    >();

  console.log("periNote", periNote);

  return (
    <StNoteForm>
      <StLabelWrapper>
        <StLabel>질문 리스트를 구조화하며 책을 읽어보세요.</StLabel>
        {/* 캐러셀 모달 버튼 StepUp 추가 */}
      </StLabelWrapper>
      <StQAWrapper>
        {periNote.map((question0, a) => (
          <StQAContainer key={a}>
            <StPriQuestionWrapper>
              <StQuestionIcon />
              <StPriQuestionInput
                placeholder="질문을 입력해주세요"
                key={`q0-${a}`}
                value={question0.question}
                onChange={(event) => handleChangePeri("question", event.target.value, [a])}
              />
            </StPriQuestionWrapper>
            <StAnswerWrapper>
              {question0.answer.map((answer0, b) => (
                <React.Fragment key={b}>
                  <StPriAnswerWrapper>
                    <StAnswerIcon />
                    <StPriAnswerInput
                      placeholder="답변을 입력해주세요"
                      key={`a0-${b}`}
                      value={answer0.text}
                      onChange={(event) => handleChangePeri("answer", event.target.value, [a, b])}
                    />
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
                            />
                            <StAddAnswerButton>답변</StAddAnswerButton>
                            <IcMore />
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
                              />
                              <IcMore />
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
                                    />
                                    <StAddAnswerButton>답변</StAddAnswerButton>
                                    <IcMore />
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
                                      />
                                      <IcMore />
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
                                                handleChangePeri("question", event.target.value, [a, b, c, d, e, f, g])
                                              }
                                            />
                                            <StAddAnswerButton>답변</StAddAnswerButton>
                                            <IcMore />
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
                                              />
                                              <IcMore />
                                            </StAnswerInputWrapper>
                                            {answer3.children.map((question4, i) => (
                                              <StArticle key={i} isFirst={false}>
                                                <StQuestionLabelWrapper>
                                                  <StQuestionLabel bgcolor={theme.colors.orange500}>
                                                    질문
                                                  </StQuestionLabel>
                                                  <StQuestionInputWrapper>
                                                    <StQuestionInput
                                                      placeholder="질문을 입력해주세요"
                                                      key={`q3-${i}`}
                                                      value={question4.question}
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
                                                        ])
                                                      }
                                                    />
                                                    <StAddAnswerButton>답변</StAddAnswerButton>
                                                    <IcMore />
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
                                                      />
                                                      <IcMore />
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
      </StQAWrapper>
    </StNoteForm>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  max-height: fit-content;
`;

const StLabelWrapper = styled.div`
  padding: 4.6rem 0 4.6rem 2rem;
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
`;

const StPriQuestionWrapper = styled.div`
  position: relative;
  padding: 2.6rem 0 2.6rem 8.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  // focus 되었을 때 잘 적용될지 확인용
  /* &:hover {
    border-bottom: 0.1rem solid;
    border-color: ${({ theme }) => theme.colors.orange100};
  } */
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 1.6rem;
`;

const StAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-top: none;
  border-radius: 0.8rem;
  padding: 2.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  /* &:hover {
    border-color: ${({ theme }) => theme.colors.orange100};
  } */
`;

const StPriQuestionInput = styled.input`
  ${({ theme }) => theme.fonts.header4}
`;

const StPriAnswerWrapper = styled.div`
  position: relative;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.white200};
  padding-bottom: 2.8rem;
  padding-left: 5.6rem;
`;

const StPriAnswerInput = styled.input`
  ${({ theme }) => theme.fonts.body1}
`;

const StAnswerIcon = styled(IcPeriAnswer)`
  position: absolute;
  top: 0;
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

const StQuestionLabel = styled.label<{ bgcolor: string }>`
  margin-right: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.8rem;
  background-color: ${({ bgcolor }) => bgcolor};
  width: fit-content;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.white};
`;

const StQuestionLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StQuestionInputWrapper = styled.div`
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

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray200};
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
`;
