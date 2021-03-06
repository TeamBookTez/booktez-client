import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { IcCancelBlack } from "../../assets/icons";
import { BookInfo } from "../../pages/AddBook";
import { navigatingBookInfoState } from "../../utils/atom";
import { postData } from "../../utils/lib/api";
import { Button } from "../common/styled/Button";
import { PublishDate } from "./BookInfoWrapper";

interface ShowModalProps {
  bookInfo: BookInfo;
  publishDate: PublishDate;
  onToggleModal: () => void;
}

export default function ShowModal(props: ShowModalProps) {
  const { bookInfo, publishDate, onToggleModal } = props;
  const { thumbnail, title, authors, translators } = bookInfo;

  const [navigatingBookInfo, setNavigatingBookInfo] = useRecoilState(navigatingBookInfoState);

  const publicationDt = `${publishDate["year"]}년 ${publishDate["month"]}월 ${publishDate["date"]}일`;

  const bookData = { ...bookInfo, publicationDt, author: authors, translator: translators };

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const navigate = useNavigate();

  const postAddBooks = async () => {
    const { data } = await postData("/book", bookData, userToken);

    if (!userToken) {
      const { isbn, thumbnail, title, authors, translators, publicationDt } = bookData;

      sessionStorage.setItem(
        "booktez-bookData",
        JSON.stringify({
          isbn,
          thumbnail,
          title,
          author: authors,
          translator: translators,
          publicationDt,
        }),
      );
    }

    const tempNavigatingBookInfo = {
      ...navigatingBookInfo,
      reviewId: data.data.reviewId,
      title,
      fromUrl: "/main/add-book",
    };

    setNavigatingBookInfo(tempNavigatingBookInfo);
    navigate("/book-note");
  };

  return (
    <>
      <StIcCancel onClick={onToggleModal} />
      {thumbnail ? (
        <ModalThumbnail src={thumbnail} alt="책 표지" />
      ) : (
        <ModalThumbnail
          src="https://bookstairs-bucket.s3.ap-northeast-2.amazonaws.com/defaultBookImg.png"
          alt="책 표지"
        />
      )}
      <ModalTitle>{title}</ModalTitle>
      <ModalLabelWrapper>
        <ModalLabel>
          {authors.length > 2 ? (
            <>
              {authors[0]} 외 {authors.length - 1}명 지음
            </>
          ) : (
            <>
              {authors[0]} {authors[1]} 지음
            </>
          )}
        </ModalLabel>
        {translators.length > 0 ? (
          <ModalLabel>
            <DivideLine>|</DivideLine>
            {translators.length > 2 ? (
              <>
                {translators[0]} 외 {translators.length - 1}명 옮김
              </>
            ) : (
              <>
                {translators[0]} {translators[1]} 옮김
              </>
            )}
          </ModalLabel>
        ) : null}
      </ModalLabelWrapper>
      <ModalDate>{publicationDt} 출간</ModalDate>
      <StWriteBtn onClick={postAddBooks} id="start_reading_book">
        독서 시작
      </StWriteBtn>
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

const StIcCancel = styled(IcCancelBlack)`
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
