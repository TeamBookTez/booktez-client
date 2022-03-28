import {
  ImgPeriNoteStepUp1,
  ImgPeriNoteStepUp2,
  ImgPeriNoteStepUp3,
  ImgPreNoteStepUp1,
  ImgPreNoteStepUp3,
  ImgPreNoteStepUp21,
  ImgPreNoteStepUp22,
  ImgPreNoteStepUp23,
} from "../assets/images";

export interface StepUpContent {
  id: number;
  lifeQuote: string;
  public: string;
  header: string;
  desc: string;
  imgUrl: string;
}

const preNoteStepUp1 = [
  {
    id: 1,
    lifeQuote: "“책은 그것을 적절히 선택할 수 있는 독자에게 갖가지의 즐거움을 안겨준다.”",
    public: "몽키스테외",
    header: "방향성을 찾아보세요.",
    desc: "어떤 부분에서의 성장을 기대하시나요?\n이 책에 갖는 기대를 설정함으로써 자신만의\n방향성을 가지고 책을 읽어 나갈 수 있을 거예요.",
    imgUrl: ImgPreNoteStepUp1,
  },
];

const preNoteStepUp2 = [
  {
    id: 1,
    lifeQuote: "“생각하지 않고 읽는 것은 잘 씹지 않고 먹는 것과 같다.”",
    public: "에드먼드 버크",
    header: "전략을 세워 보세요.",
    desc: "책장을 넘기기 전,\n자신의 기대를 채우기 위한 전략을 세워 보아요.\n이때는 책의 제목, 서론, 목차를 보는 게 좋아요.\n",
    imgUrl: ImgPreNoteStepUp21,
  },
  {
    id: 2,
    lifeQuote: "책의 제목, 서론에는 저자가 전달하고자 하는 핵심 메시지가 들어있어요.",
    public: "",
    header: "방향성을 찾아보세요.",
    desc: "제목, 서론에 드러나는 저자의 핵심 메시지와\n내가 이 책에 기대한 바를 서로 비교해 보세요.\n책과 나의 방향성이 다르면 기대감을 조정하거나,\n새로운 책을 선택할 수 있어요.",
    imgUrl: ImgPreNoteStepUp22,
  },
  {
    id: 3,
    lifeQuote: "책의 목차는 핵심 메시지를 효과적으로 전달하기 위해 구성 되었어요.",
    public: "",
    header: "기대를 채워줄 부분을 파악해 보세요.",
    desc: "저자가 목차를 어떤 순서로 구성했고\n그렇게 구성한 이유는 무엇인지 파악해 보세요.\n핵심 메시지를 전달하는 흐름 속에서 내 기대를\n채워줄 부분들을 가려낼 수 있을 거예요.",
    imgUrl: ImgPreNoteStepUp23,
  },
];

const preNoteStepUp3 = [
  {
    id: 1,
    lifeQuote: "“내가 세계를 알게 된 것은 책에 의해서였다.”",
    public: "사르트르",
    header: "스스로에게 질문을 던져 보세요.",
    desc: "제목, 서론, 목차를 살펴보며 호기심이 생긴 것들\n에 대해 스스로에게 질문들을 던져 보세요.\n이 단계에서 만든 질문들은 다음 단계를 거쳐\n더 깊고 넓은 질문과 사색으로 이어질 거예요.",
    imgUrl: ImgPreNoteStepUp3,
  },
];

export const stepUpContentArray: StepUpContent[][] = [preNoteStepUp1, preNoteStepUp2, preNoteStepUp3];

export const periNoteStepUp = [
  {
    id: 1,
    lifeQuote: "",
    public: "",
    header: "본격적으로 책을 읽어봐요!",
    desc: "독서 전 단계 잘 마무리하고 오셨나요?\n지금부터 독서 전 단계에서 설정한 방향을 따라\n독서를 해 나갈 거예요.",
    imgUrl: ImgPeriNoteStepUp1,
  },
  {
    id: 2,
    lifeQuote: "",
    public: "",
    header: "내가 만든 질문의 답변을 찾아 보세요.",
    desc: "앞 단계에서 자신의 기대를 채우기 위한 질문을 만들었어요.\n이렇게 만든 질문들에 답하다 보면\n지식이 구조화되어 머릿속에 저장 될 거예요.",

    imgUrl: ImgPeriNoteStepUp2,
  },
  {
    id: 3,
    lifeQuote: "",
    public: "",
    header: "답변에 대한 꼬리 질문을 만들어 보세요.",
    desc: "독서 전에 만들었던 큰 질문들은\n책장을 넘길수록 더 날카롭고 깊어져 갈 거예요.\n호기심을 느낀다면 언제든\n,꼬리 질문들을 만들어 보세요.",
    imgUrl: ImgPeriNoteStepUp3,
  },
];

export const reviewData = {
  bookTitle: "나는 왜 이 일을 하는가?",
  answerOne:
    "상황에 따라 변하는 '동기'를 한 곳에 잡아 두고 싶다\n앞으로의 모든 업무에 대해 내가 이 일을 왜 하는지 명확하게 할 수 있는 힌트를 얻고 싶다.",
  answerTwo:
    "이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 '왜' 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지, 공유 방법들을 소개한다.\n나는 개인 수준에서 '왜'를 찾고, 유지할 수 있는 방법이 궁금하다.",
  questionList: [
    "왜 Why가 중요하다고 주장하는 것일까?",
    "나 자신의 Why를 발견하는 방법은 무엇일까?",
    "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
  ],
  answerThree: {
    type: "Root",
    content: "root",
    children: [
      {
        type: "question",
        content: "왜 Why가 중요하다고 주장하는 것일까?",
        children: [
          {
            type: "answer",
            content:
              "'왜?'로 시작하면 남들이 내 물건을 사고, 나와 협업하고, 나의 비전에 동의하고 함께하도록 영감을 불러일으킬 수 있다.",
            children: [],
          },
        ],
      },
      {
        type: "question",
        content: "나 자신의 Why를 발견하는 방법은 무엇일까?",
        children: [
          {
            type: "answer",
            content: "파트너를 구한다.",
            children: [
              {
                type: "question",
                content: "파트너의 역할 가이드는 무엇인가?",
                children: [
                  {
                    type: "answer",
                    content: "상대의 과거 스토리에 귀를 기울여야 한다.",
                    children: [
                      {
                        type: "question",
                        content: "능동적 청취자가 되는 법?",
                        children: [
                          {
                            type: "answer",
                            content: "상대의 말 속에 숨겨진 의미와 동기, 감정을 이해해야 한다.",
                            children: [],
                          },
                          {
                            type: "answer",
                            content: "이를 위해 눈을 맞추고, 비언어적으로 호응하자.",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "answer",
                    content:
                      "왜?는 앞으로의 삶의 자게를 찾는 것이 아니라, 자연스러운 최고의 모습일 때의 그 사람을 나타내는 것이다.",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            type: "answer",
            content: "파트너를 만나기 전에 할 일 - 스토리 수집",
            children: [
              {
                type: "question",
                content: "스토리 수집 가이드라인?",
                children: [
                  {
                    type: "answer",
                    content:
                      "지금의 내가 완성되는데 정말로 큰 영향을 끼친, 내 인생 속 구체적 경험이나 인물들을 떠올려보자.",
                    children: [],
                  },
                  {
                    type: "answer",
                    content:
                      "왜?는 과거로부터 나오기에 태어난 순간부터 지금까지의 어떤 것이든 스토리로 선택해도 된다. 지금의 내가 되는 데에 이바지한 경험이라는 점에서는 모두 중요하다.",
                    children: [
                      {
                        type: "question",
                        content: "스토리 수집에 도움 되는 질문?",
                        children: [
                          {
                            type: "answer",
                            content: "최악의 날을 떠올려보자. 무슨 일이 있었는가?",
                            children: [],
                          },
                          {
                            type: "answer",
                            content: "학교에서 내가 정말 좋아했던 활동은 무엇인가?",
                            children: [],
                          },
                          {
                            type: "answer",
                            content: "인생의 방향이 완전히 달라졌음을 느꼈던 인생의 가장 결정적 순간은 언제인가?",
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
        type: "question",
        content: "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
        children: [
          {
            type: "answer",
            content: "왜?를 정의했다면, 어떻게?를 정의한다.",
            children: [],
          },
        ],
      },
    ],
  },
};
