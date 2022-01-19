export interface KAKAOParams {
  query: string;
  sort: string;
  size: number;
}

export interface PostBody {
  email?: string;
  password?: string;
  nickname?: string;
  isbn?: string;
  thumbnail?: string;
  title?: string;
  author?: string[];
  answerOne?: string;
  answerTwo?: string;
  answerThree?: AnswerThree;
  questionList?: string[];
  progress?: string;
}

export interface GetBody {
  bookTitle?: string;
  answerOne?: string;
  answerTwo?: string;
  answerThree?: AnswerThree;
  questionList?: string[];
}

export interface PatchBody {
  answerOne?: string;
  answerTwo?: string;
  answerThree?: AnswerThree;
}

export interface AnswerThree {
  root: Question[];
}

export interface Answer {
  text: string;
  children: Question[];
}

interface ObjKey {
  [key: string]: number | string | Answer[];
}

export interface Question extends ObjKey {
  depth: number;
  question: string;
  answer: Answer[];
}
