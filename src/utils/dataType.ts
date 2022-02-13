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
  questionList?: string[];
  reviewSt?: string;
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
  reviewSt?: number;
}

export interface PeriNoteTreeNode {
  type: string;
  content: string;
  children: PeriNoteTreeNode[];
}

interface AnswerThree {
  answerThree: PeriNoteTreeNode;
  reviewSt: number;
}
