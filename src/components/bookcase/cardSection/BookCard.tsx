import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcBin } from "../../../assets/icons";
import { BookcaseInfo } from "../../../pages/Bookcase";
import { PopUpDelete } from "../../common";

interface BookCardProps {
  bookcaseInfo: BookcaseInfo;
  handleBookDelete: () => void;
  isLogin: boolean;
}

export default function BookCard(props: BookCardProps) {
  const { bookcaseInfo, handleBookDelete, isLogin } = props;
  const { author, reviewId, thumbnail, title, state } = bookcaseInfo;
  const [isPopUp, setIsPopUp] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const reviewUrl = state === 2 ? "/book-note" : state === 3 ? "/book-note/peri" : "/detail-book-note";

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };

  const moveBookNoteHandler = () => {
    if (isLogin) {
      navigate(reviewUrl, { state: { isLogin, reviewId, fromUrl: pathname } });
    }
  };

  return (
    <StCardWrapper>
      <StBookCard onClick={moveBookNoteHandler}>
        <StImgWrapper>
          <StImg src={thumbnail} alt={`도서 ${title}의 이미지`} />
        </StImgWrapper>
        <StTextWrapper>
          <StTitleWrapper>
            <StCardTitle>{title}</StCardTitle>
            <StCardAuthor>
              {author.length > 2 ? (
                <>
                  {author[0]} 외 {author.length - 1}명
                </>
              ) : (
                <>
                  {author[0]} {author[1]}
                </>
              )}
            </StCardAuthor>
          </StTitleWrapper>
        </StTextWrapper>
      </StBookCard>
      <StIcBin onClick={handlePopUp} />
      {isPopUp ? <PopUpDelete onPopUp={handlePopUp} reviewId={reviewId} handleBookDelete={handleBookDelete} /> : <></>}
    </StCardWrapper>
  );
}

const StCardWrapper = styled.div`
  position: relative;

  border-radius: 1.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange200};
    cursor: pointer;
  }
  &:hover > svg {
    display: block;
  }
`;

const StBookCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 24.5rem;
  height: 39.3rem;

  padding: 1.6rem 2rem;

  &:hover > div > header {
    width: 16.8rem;
  }
`;

const StImgWrapper = styled.div`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 1.6rem;

  border-radius: 1.6rem;
`;

export const StImg = styled.img`
  width: 100%;
  height: 100%;

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;
`;

const StTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StTitleWrapper = styled.header`
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StCardTitle = styled.strong`
  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardAuthor = styled.p`
  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.gray300};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StIcBin = styled(IcBin)`
  position: absolute;
  right: 2.2rem;
  bottom: 2.2rem;

  display: none;
`;
