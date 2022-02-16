import axios, { AxiosError, AxiosResponse } from "axios";
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

export const useGetPreNote = (token: string, key: string): [PreNoteData, boolean] => {
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    reviewSt: 2,
    finishSt: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const {
          data: { data },
        } = await client(token).get(key);

        if (!data.questionList.length) {
          // 버그? 사용자가 질문 리스트를 모두 지우고 저장해도 다시 빈 input이 생성됨
          // 처음 추가된 책의 review에 대해서 서버에서 questionList를 []가 아닌 [""]로 주면 해결될 듯
          setPreNote({ ...data, questionList: [""] });
        } else {
          setPreNote(data);
        }
      } catch (err) {
        // 서버 상태 관리 도입 후 error일 경우 retry할 수 있도록 하면 어떨까?
        if (axios.isAxiosError(err)) {
          console.log("err", err.message);
        }
      }
      setIsLoading(false);
    })();
  }, []);

  return [preNote, isLoading];
};

// preNote get과 매우 유사 - 중복 제거 필요
export const useGetPeriNote = (token: string, key: string): [PeriNoteData, boolean] => {
  const [periNote, setPeriNote] = useState<PeriNoteData>({
    answerThree: { type: "", content: "", children: [] },
    reviewSt: 3,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const {
          data: { data },
        } = await client(token).get(key);

        setPeriNote(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("err", err.message);
        }
      }
      setIsLoading(false);
    })();
  }, []);

  return [periNote, isLoading];
};

export function useFetchNote<T>(token: string, key: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState<AxiosError>();
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
          setError(err);
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
