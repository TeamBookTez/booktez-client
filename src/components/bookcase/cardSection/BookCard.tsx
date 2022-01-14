import styled from "styled-components";

interface BookInfo {
  thumbnail: string;
  title: string;
  authors: string[];
}
interface BookCardProps {
  bookInfo: BookInfo;
}

export default function BookCard(props: BookCardProps) {
  const { thumbnail, title, authors } = props.bookInfo;

  return (
    <StBookCard>
      <StImgWrapper>
        <StImg src={thumbnail} alt="다음 책을 쌓아볼까요?" />
      </StImgWrapper>
      <StCardTitle>{title}</StCardTitle>
      <StCardAuthor>{authors.join(", ")}</StCardAuthor>
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

const StCardTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardAuthor = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;
