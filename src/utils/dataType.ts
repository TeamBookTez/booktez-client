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

export interface PatchBody {
  formData?: FormData;
  answerOne?: string;
  answerTwo?: string;
  answerThree?: AnswerThree;
}

interface AnswerThree {
  root: Question[];
}

interface Answer {
  text: string;
  children: Question[];
}

interface Question {
  depth: number;
  question: string;
  answer: Answer[];
}
