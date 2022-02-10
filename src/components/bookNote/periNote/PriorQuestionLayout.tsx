import { ReactNode } from "react";
import styled from "styled-components";

interface PriorQuestionLayoutProps {
  children: ReactNode;
}

export default function PriorQuestionLayout(props: PriorQuestionLayoutProps) {
  const { children } = props;

  return <StArticle>{children}</StArticle>;
}

const StArticle = styled.article`
  position: relative;

  padding: 2.6rem 4.4rem 2.6rem 8.4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;
