import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcCancelBlack } from "../../assets/icons";
import { ImgNull } from "../../assets/images";
import { BookInfo } from "../../pages/AddBook";
import { postData } from "../../utils/lib/api";
import { Button } from "../common/styled/Button";
import { PublishDate } from "./BookInfoWrapper";

interface ShowModalProps {
  bookInfo: BookInfo;
  setBookInfo: Dispatch<SetStateAction<BookInfo>>;
  publishDate: PublishDate;
  onToggleModal: () => void;
}

export default function ShowModal(props: ShowModalProps) {
  const { bookInfo, publishDate, onToggleModal } = props;
  const { thumbnail, title, authors, translators } = bookInfo;
  const bookData = { ...bookInfo, publicationDate: publishDate.toString(), author: authors, translator: translators };
  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const nav = useNavigate();

  const postAddBooks = async () => {
    try {
      const res = await postData("/book", bookData, userToken);
      const resData = res.data.data.isLogin;

      nav("/book-note");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  return (
    <>
      <StIcCancel onClick={onToggleModal} />
      {thumbnail ? <ModalThumbnail src={thumbnail} alt="책 표지" /> : <ModalThumbnail src={ImgNull} alt="책 표지" />}
      <ModalTitle>{title}</ModalTitle>
      <ModalLabelWrapper>
        <ModalLabel>{authors} 지음</ModalLabel>
        {translators.length > 0 && (
          <ModalLabel>
            <DivideLine>|</DivideLine>
            {translators} 옮김
          </ModalLabel>
        )}
      </ModalLabelWrapper>
      <ModalDate>
        {publishDate.year}년 {publishDate.month}월 {publishDate.date}일 출간
      </ModalDate>
      <StWriteBtn onClick={postAddBooks}>독서 시작</StWriteBtn>
    </>
  );
}

const ModalThumbnail = styled.img`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 3.5rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;
`;

const ModalTitle = styled.strong`
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.header0};
`;

const ModalLabelWrapper = styled.div`
  display: flex;
  margin-bottom: 2.1rem;
`;

const ModalLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body0};
`;

const DivideLine = styled.span`
  margin: 0 0.5rem;
`;

const ModalDate = styled.p`
  margin-bottom: 2.8rem;

  color: ${({ theme }) => theme.colors.white500};
  ${({ theme }) => theme.fonts.body2};
`;

const StWriteBtn = styled(Button)`
  width: 16.6rem;
  height: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button};
`;

export const StIcCancel = styled(IcCancelBlack)`
  position: absolute;
  top: 3.2rem;
  left: 2.4rem;
  z-index: 20;

  width: 4.8rem;
  height: 4.8rem;

  &:hover {
    cursor: pointer;
  }
`;
