import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { PreNoteData } from "../../../pages/BookNote";
import { Answer, Question } from "../../../utils/dataType";

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
      {periNote.map((question0, a) => (
        <React.Fragment key={a}>
          <label>Question</label>
          <input
            key={`q0-${a}`}
            value={question0.question}
            onChange={(event) => handleChangePeri("question", event.target.value, [a])}
          />
          {question0.answer.map((answer0, b) => (
            <React.Fragment key={b}>
              <label>Answer</label>
              <input
                key={`a0-${b}`}
                value={answer0.text}
                onChange={(event) => handleChangePeri("answer", event.target.value, [a, b])}
              />
              {answer0.children.map((question1, c) => (
                <React.Fragment key={c}>
                  <label>Question</label>
                  <input
                    key={`q1-${c}`}
                    value={question1.question}
                    onChange={(event) => handleChangePeri("question", event.target.value, [a, b, c])}
                  />
                  {question1.answer.map((answer1, d) => (
                    <React.Fragment key={d}>
                      <label>Answer</label>
                      <input
                        key={`a1-${d}`}
                        value={answer1.text}
                        onChange={(event) => handleChangePeri("answer", event.target.value, [a, b, c, d])}
                      />
                      {answer1.children.map((question2, e) => (
                        <React.Fragment key={e}>
                          <label>Question</label>
                          <input
                            key={`q2-${e}`}
                            value={question2.question}
                            onChange={(event) => handleChangePeri("question", event.target.value, [a, b, c, d, e])}
                          />
                          {question2.answer.map((answer2, f) => (
                            <React.Fragment key={f}>
                              <label>Answer</label>
                              <input
                                key={`a2-${f}`}
                                value={answer2.text}
                                onChange={(event) => handleChangePeri("answer", event.target.value, [a, b, c, d, e, f])}
                              />
                              {answer2.children.map((question3, g) => (
                                <React.Fragment key={g}>
                                  <label>Question</label>
                                  <input
                                    key={`q3-${g}`}
                                    value={question3.question}
                                    onChange={(event) =>
                                      handleChangePeri("question", event.target.value, [a, b, c, d, e, f, g])
                                    }
                                  />
                                  {question3.answer.map((answer3, h) => (
                                    <React.Fragment key={h}>
                                      <label>Answer</label>
                                      <input
                                        key={`a3-${h}`}
                                        value={answer3.text}
                                        onChange={(event) =>
                                          handleChangePeri("answer", event.target.value, [a, b, c, d, e, f, g, h])
                                        }
                                      />
                                    </React.Fragment>
                                  ))}
                                </React.Fragment>
                              ))}
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </StNoteForm>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  max-height: fit-content;
`;
