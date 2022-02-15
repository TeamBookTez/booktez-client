import axios from "axios";
import { useEffect, useState } from "react";

import { PeriNoteTreeNode } from "../dataType";
import { client } from ".";

interface PeriNoteData {
  answerThree: PeriNoteTreeNode;
  reviewSt: number;
}

interface PreNoteData {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  reviewSt: number;
  finishSt?: boolean;
}

export function useFetchNote<T>(token: string, key: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data },
        } = await client(token).get(key);

        if (data.questionList && !data.questionList.length) {
          // 버그? 사용자가 질문 리스트를 모두 지우고 저장해도 다시 빈 input이 생성됨
          // 처음 추가된 책의 review에 대해서 서버에서 questionList를 []가 아닌 [""]로 주면 해결될 듯
          setData({ ...data, questionList: [""] });
        } else {
          setData(data);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // error 처리에 대하여 고민해보기
          console.log(err.response);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, setData, isLoading };
}

export const patchBookNote = async (token: string, key: string, body: PreNoteData | PeriNoteData) => {
  try {
    const { data } = await client(token).patch(key, body);

    return data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response;
    }
  }
};
