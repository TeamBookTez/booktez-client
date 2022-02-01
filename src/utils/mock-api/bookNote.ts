import { useEffect, useState } from "react";

import { PreNoteData } from "../../components/bookNote/preNote/PreNoteRefactor";
import { mockClient } from "../lib";

interface MockPreNote {
  answerOne: string;
  answerTwo: string;
  questionList: string[];
  progress: number;
}

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

export const patchPreNote = async (token: string, key: string, body: MockPreNote) => {
  await mockClient(token).patch(key, body);
};
