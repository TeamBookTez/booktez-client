import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { PopUpDelete } from "../components/common";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";
import { GetBody } from "../utils/dataType";
import { getData } from "../utils/lib/api";

export default function DetailExample() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const reviewId = 4; // 리뷰 id 를 받아와 처리
  const token = `${process.env.REACT_APP_TEST_TOKEN}`; // 로컬스토리지에서 token 받아와 처리
  const navigate = useNavigate();

  //이 부분은 props를 필수로 내려주기 위해 작성한 코드
  const [bookDelete, setBookDelete] = useState<boolean>(false);
  const handleBookDelete = () => {
    setBookDelete(!bookDelete);
  };
  //
  const reviewData = {
    bookTitle: "나는 왜 이 일을 하는가? 2",
    answerOne:
      "상황에 따라 변하는 '동기'를 한 곳에 잡아 두고 싶다\n앞으로의 모든 업무에 대해 내가 이 일을 왜 하는지 명확하게 할 수 있는 힌트를 얻고 싶다.",
    answerTwo:
      "이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 '왜' 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지, 공유 방법들을 소갸한다.\n나는 개인 수준에서 '왜'를 찾고, 유지할 수 있는 방법이 궁금하다.",
    questionList: [
      "왜 Why가 중요하다고 주장하는 것일까?",
      "나 자신의 Why를 발견하는 방법은 무엇일까?",
      "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
    ],
    answerThree: {
      root: [
        {
          depth: 1,
          question: "왜 Why가 중요하다고 주장하는 것일까?",
          answer: [
            {
              text: "'왜?'로 시작하면 남들이 내 물건을 사고, 나와 협업하고, 나의 비전에 동의하고 함께하도록 영감을 불러일으킬 수 있다.",
              children: [],
            },
          ],
        },
        {
          depth: 1,
          question: "나 자신의 Why를 발견하는 방법은 무엇일까?",
          answer: [
            {
              text: "파트너를 구한다",
              children: [
                {
                  depth: 2,
                  question: "파트너의 역할 가이드는 무엇인가?",
                  answer: [
                    {
                      text: "상대의 과거 스토리에 귀를 기울여야 한다.",
                      children: [
                        {
                          depth: 3,
                          question: "능동적 청취자가 되는 법?",
                          answer: [
                            {
                              text: "상대의 말 속에 숨겨진 의미와 동기, 감정을 이해해야 한다.",
                              children: [],
                            },
                            {
                              text: "이를 위해 눈을 맞추고, 비언어적으로 호응하자.",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      text: "왜?는 앞으로의 삶의 자게를 찾는 것이 아니라, 자연스러운 최고의 모습일 때의 그 사람을 나타내는 것이다.",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "파트너를 만나기 전에 할 일 - 스토리 수집",
              children: [
                {
                  depth: 2,
                  question: "스토리 수집 가이드라인?",
                  answer: [
                    {
                      text: "지금의 내가 완성되는데 정말로 큰 영향을 끼친, 내 인생 속 구체적 경험이나 인물들을 떠올려보자.",
                      children: [],
                    },
                    {
                      text: "왜?는 과거로부터 나오기에 태어난 순간부터 지금까지의 어떤 것이든 스토리로 선택해도 된다. 지금의 내가 되는 데에 이바지한 경험이라는 점에서는 모두 중요하다.",
                      children: [
                        {
                          depth: 3,
                          question: "스토리 수집에 도움 되는 질문?",
                          answer: [
                            {
                              text: "최악의 날을 떠올려보자. 무슨 일이 있었는가?",
                              children: [],
                            },
                            {
                              text: "학교에서 내가 정말 좋아했던 활동은 무엇인가?",
                              children: [],
                            },
                            {
                              text: "인생의 방향이 완전히 달라졌음을 느꼈던 인생의 가장 결정적 순간은 언제인가?",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          depth: 1,
          question: "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
          answer: [
            {
              text: "왜?를 정의했다면, 어떻게?를 정의한다.",
              children: [],
            },
          ],
        },
      ],
    },
  };

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };

  return (
    <>
      <StNoteModalWrapper>
        {isPopUp ? <></> : <StIcCancelWhite onClick={() => navigate(-1)} />}
        <StBookTitle>{reviewData?.bookTitle}</StBookTitle>
        <StBtnWrapper>
          <IcDeleteNote onClick={handlePopUp} />
          <IcModifyNote />
        </StBtnWrapper>
        <DetailArticleWrapper title="독서 전 단계">
          <ExamplePreNote
            answerOne={reviewData?.answerOne}
            answerTwo={reviewData?.answerTwo}
            questionList={reviewData?.questionList}
          />
        </DetailArticleWrapper>
        <StMarginTop>
          <DetailArticleWrapper title="독서 중 단계">
            <ExamplePeriNote answerThree={reviewData?.answerThree} />
          </DetailArticleWrapper>
        </StMarginTop>
      </StNoteModalWrapper>
      {isPopUp ? <PopUpDelete onPopUp={handlePopUp} reviewId={reviewId} handleBookDelete={handleBookDelete} /> : <></>}
    </>
  );
}

const StBtnWrapper = styled.div`
  text-align: right;

  & > svg {
    &:hover {
      cursor: pointer;
    }
  }
  & > svg:not(:first-child) {
    margin-left: 1.4rem;
  }
`;
const StMarginTop = styled.div`
  margin-top: 8.3rem;
`;
