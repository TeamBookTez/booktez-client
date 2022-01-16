import axios, { AxiosRequestHeaders } from "axios";
import { useEffect, useState } from "react";

import { client } from "../utils/lib";
import { patchData, postData } from "../utils/lib/api";

interface Body {
  email: string;
  password: string;
  nickname?: string;
}

export default function Test() {
  const header: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  const handleFileChange = async (e: any) => {
    const formData = new FormData();
    const imgFile = e.target.files[0];

    formData.append("img", imgFile);
    const d = formData.getAll("img");

    const data = {
      answerThree: {
        root: [
          {
            depth: 1,
            question: "오늘 뭐 먹었어?",
            answer: [
              {
                text: "피자먹었어.",
                children: [
                  {
                    depth: 2,
                    question: "피자 맛있었어?",
                    answer: [
                      {
                        text: "",
                        children: [],
                      },
                    ],
                  },
                  {
                    depth: 2,
                    question: "콜라도 먹었어?",
                    answer: [
                      {
                        text: "사이다로 했어.",
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                text: "햄버거도 먹었다!",
                children: [
                  {
                    depth: 2,
                    question: "맥도날드?",
                    answer: [
                      {
                        text: "아니 버거킹",
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
      progress: "3",
    };

    console.log(d);
    try {
      const res = await patchData(header, "/review/now/16", data);

      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  // const body: Body = {
  //   email: "test@booktez.com",
  //   password: "test1",
  //   nickname: "뀽",
  // };

  // const reviewId = 16;

  // const signup = async (header: AxiosRequestHeaders, key: string) => {
  //   const { data } = await getData(header, key);

  //   console.log("data", data);
  // };

  // useEffect(() => {
  //   signup(header, `/review/${reviewId}`);
  // }, []);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
