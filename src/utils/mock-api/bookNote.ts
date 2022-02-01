import { useEffect, useState } from "react";

import { PreNoteData } from "../../components/bookNote/preNote/PreNoteRefactor";
import { Question } from "../dataType";
import { mockClient } from "../lib";

export const useGetBookNoteTitle = (token: string, key: string) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const { data } = await mockClient(token).get(key);

        setTitle(data.title);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return [title, isLoading, isError];
};

export const useGetPreNote = (token: string, key: string) => {
  const [preNote, setPreNote] = useState<PreNoteData>({
    answerOne: "",
    answerTwo: "",
    questionList: [""],
    progress: 2,
  });

  useEffect(() => {
    (async function () {
      try {
        const { data } = await mockClient(token).get(key);

        setPreNote(data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return [preNote];
};

// preNote get과 매우 유사 - 중복 제거 필요
export const useGetPeriNote = (token: string, key: string) => {
  const [periNote, setPeriNote] = useState<Question[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await mockClient(token).get(key);

        setPeriNote(data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return [periNote];
};

export const patchPreNote = async (token: string, key: string, body: PreNoteData) => {
  await mockClient(token).patch(key, body);
};
