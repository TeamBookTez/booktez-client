import { useEffect, useState } from "react";

import { PreNoteData } from "../../components/bookNote/preNote/PreNote";
import { Question } from "../dataType";
import { mockClient } from "../lib";

interface PeriNoteData {
  answerThree: { root: Question[] };
  progress: number;
}

export const useGetPreNote = (token: string, key: string): [PreNoteData, boolean] => {
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const { data } = await mockClient(token).get(key);

        setPreNote(data);
      } catch (err) {
        return;
      }
      setIsLoading(false);
    })();
  }, []);

  return [preNote, isLoading];
};

// preNote get과 매우 유사 - 중복 제거 필요
export const useGetPeriNote = (token: string, key: string): [PeriNoteData, boolean] => {
  const [periNote, setPeriNote] = useState<PeriNoteData>({ answerThree: { root: [] }, progress: 3 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const { data } = await mockClient(token).get(key);

        setPeriNote(data);
      } catch (err) {
        return;
      }
      setIsLoading(false);
    })();
  }, []);

  return [periNote, isLoading];
};

export const patchBookNote = async (token: string, key: string, body: PreNoteData | PeriNoteData) => {
  await mockClient(token).patch(key, body);
};
