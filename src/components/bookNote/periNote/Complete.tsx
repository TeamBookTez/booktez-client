import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { IsLoginState } from "../../../pages/BookNote";
import { StModalWrapper } from "../../addBook/ModalWrapper";
import { StIcCancel } from "../../addBook/ShowModal";
import { Button } from "../../common/styled/Button";

interface BookData {
  authors: string[];
  publicationDt: string;
  thumbnail: string;
  title: string;
  translators: string[];
}

interface CompleteProps {
  bookData: BookData;
  isLoginState: IsLoginState;
}

export default function Complete(props: CompleteProps) {
  const navigate = useNavigate();
  const { bookData, isLoginState } = props;
  const { authors, publicationDt, thumbnail, title, translators } = bookData;

  return (
    <StModalWrapper>
      <StAniWrapper>
        <StIcCancel onClick={() => navigate(-1)} />
        <StHeader>북노트 작성을 완료했어요!</StHeader>
        <StImgWrapper thumbnail={thumbnail} />
        <StTitle>{title}</StTitle>
        <StSubWrapper>
          <StAuthor>{authors.join(" ")} 지음</StAuthor>
          {translators ? (
            translators.length === 1 ? (
              <StTranslator>{translators[0]} 옮김</StTranslator>
            ) : translators.length >= 2 ? (
              <StTranslator>
                {translators[0]} 외 {translators.length - 1}명 옮김
              </StTranslator>
            ) : null
          ) : null}
        </StSubWrapper>
        <StDate>{publicationDt} 출간</StDate>
        <StButtonWrapper>
          <StMainButton type="button" onClick={() => navigate("/main")}>
            메인으로
          </StMainButton>
          <StCompleteButton type="button" onClick={() => navigate("/detail-book-note", { state: isLoginState })}>
            북노트 확인
          </StCompleteButton>
        </StButtonWrapper>
      </StAniWrapper>
    </StModalWrapper>
  );
}

const fadein = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const StAniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  animation: ${fadein} 1s ease-in-out;
`;

const StHeader = styled.h1`
  margin-bottom: 4.5rem;

  ${({ theme }) => theme.fonts.header0};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StImgWrapper = styled.div<{ thumbnail: string }>`
  position: relative;

  margin-bottom: 3.5rem;
  /* padding-top: 20%; */

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;

  background-image: url(${({ thumbnail }) => thumbnail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 20.5rem;
  height: 30rem;
`;

const StTitle = styled.strong`
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.header0};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StSubWrapper = styled.div`
  margin-bottom: 2.1rem;

  ${({ theme }) => theme.fonts.body0};
  color: ${({ theme }) => theme.colors.gray400};
`;

const StAuthor = styled.span``;

const StTranslator = styled.span`
  &::before {
    content: "";
    display: inline-block;
    clear: both;

    height: 1.7rem;

    margin: 0 0.5rem -0.2rem 0.7rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray400};
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

const StDate = styled.span`
  margin-bottom: 2.8rem;

  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.white500};
`;

const StButtonWrapper = styled.div`
  display: flex;
`;

const StMainButton = styled(Button)`
  margin-right: 2rem;

  width: 16.6rem;
  height: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button};
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const StCompleteButton = styled(Button)`
  margin-right: 2rem;

  width: 16.6rem;
  height: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button};
`;
