import React from "react";
import styled from "styled-components";

import { ImgNull } from "../../assets/images";
import { BookInfo } from "../../pages/AddBook";
import { PublishDate } from "./BookInfoWrapper";

interface ShowModalProps {
  thumbnail: string;
  title: string;
  authors: string[];
  translators: string[];
  publishDate: PublishDate;
}
export default function ShowModal(props: ShowModalProps) {
  const { thumbnail, title, authors, translators, publishDate } = props;

  return (
    <>
      {thumbnail ? <ModalThumbnail src={thumbnail} alt="책 표지" /> : <ModalThumbnail src={ImgNull} alt="책 표지" />}
      <ModalTitle>{title}</ModalTitle>
      <ModalLabelWrapper>
        <ModalLabel>{authors} </ModalLabel>
        {translators.length > 0 && (
          <ModalLabel>
            <span> | </span>
            {translators}
          </ModalLabel>
        )}
      </ModalLabelWrapper>
      <ModalDate>
        {publishDate.year}년 {publishDate.month}월 {publishDate.date}일 출간
      </ModalDate>
    </>
  );
}

const ModalThumbnail = styled.img`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 3.5rem;
`;

const ModalTitle = styled.strong`
  margin-bottom: 0.5rem;

  font: ${({ theme }) => theme.fonts.header0};
`;

const ModalLabelWrapper = styled.div`
  display: flex;
  margin-bottom: 2.1rem;
`;

const ModalLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font: ${({ theme }) => theme.fonts.body0};

  & > span {
    margin-left: 0.2em;
  }
`;

const ModalDate = styled.p`
  color: ${({ theme }) => theme.colors.white500};
  font: ${({ theme }) => theme.fonts.body2};
`;
