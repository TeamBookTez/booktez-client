import styled from "styled-components";

import { IcDelete } from "../../../assets/icons";
import { BookcaseInfo } from "../../../pages/Bookcase";

interface BookCardProps {
  bookcaseInfo: BookcaseInfo;
}
export default function BookCard(props: BookCardProps) {
  const { bookcaseInfo } = props;

  const { thumbnail, title, author } = bookcaseInfo;

  const handleDelete = () => {
    console.log("책 삭제");
  };

  return (
    <StBookCard>
      <StImgWrapper>
        <StImg src={thumbnail} alt="다음 책을 쌓아볼까요?" />
      </StImgWrapper>
      <StTextWrapper>
        <StTitleWrapper>
          <StCardTitle>{title}</StCardTitle>
          <StCardAuthor>{author}</StCardAuthor>
        </StTitleWrapper>
        <StIcDelete onClick={handleDelete} />
      </StTextWrapper>
    </StBookCard>
  );
}

const StBookCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 24.5rem;
  height: 39.3rem;

  padding: 1.6rem 2rem;

  border-radius: 1.6rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange200};
  }
  &:hover > div > header {
    width: 16.8rem;
  }
  &:hover > div > svg {
    display: inherit;
  }
`;

export const StImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StImgWrapper = styled.div`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 1.6rem;
`;

const StTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StTitleWrapper = styled.header`
  width: 100%;
`;

const StCardTitle = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardAuthor = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.gray300};
`;

const StIcDelete = styled(IcDelete)`
  display: none;
`;
