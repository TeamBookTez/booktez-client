import axios from "axios";
import { useCallback, useState } from "react";
import styled from "styled-components";

import { BookInfo } from "../../pages/AddBook";
import { client } from "../../utils/lib";
import AlertToast from "./AlertToast";
import BookEmpty from "./BookEmpty";
import BookInfoWrapper from "./BookInfoWrapper";

interface BookListProps {
  books: BookInfo[];
}

// api 나오면 함수와 함께 이동
interface Response<T> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}
interface IsExistData {
  isError: boolean | string;
  isExist: boolean;
}

export default function BookList(props: BookListProps) {
  const { books } = props;

  // default is false
  const [alertToastOpen, setAlertToastOpen] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeAlertToast = () => {
    setAlertToastOpen(false);
  };

  // api 나오면 여기 함수 따로 분리하기ㅣ
  // error code에 맞춰서 에러 토스트 메시지 달리하기
  const checkIsExist = async (isbn: string) => {
    const _token = localStorage.getItem("booktez-token");
    const userToken = _token ? _token : "";

    try {
      const { success, data }: Response<IsExistData> = await client(userToken).get(`/book/exist/${isbn}`);

      if (success) {
        return { isError: false, isExist: data.isExist };
      } else {
        console.log("[ERROR RETURNED]", data);

        return { isError: true, isExist: false };
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("[ERROR CATCHED] statusCode: ", err.response?.status, err.message);
      }

      return { isError: true, isExist: false };
    }
  };

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const handleBookModal = (isbn: string) => {
    console.log(isbn);
    // checkIsExist(isbn).then((result) => {
    //   if (result.isError) {
    //     // 에러 토스트 띄우기
    //     return;
    //   } else if (result.isExist) {
    //     setIsModalOpen(!isModalOpen);
    //   } else {
    //     setAlertToastOpen(true);
    //   }
    // });
  };

  if (books.length === 0) return <BookEmpty />;

  return (
    <StListWrapper>
      {books.map((book: BookInfo, idx: number) => (
        <BookInfoWrapper
          key={idx}
          book={book}
          isModalOpen={isModalOpen}
          onClickBookCard={handleBookModal}
          onToggleModal={toggleModal}
        />
      ))}
      {alertToastOpen ? <AlertToast onCloseAlertToast={closeAlertToast} /> : null}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 0 4rem 2.9rem 4rem;
`;
