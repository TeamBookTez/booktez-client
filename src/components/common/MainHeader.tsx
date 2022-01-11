import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface MainHeaderProps {
  children: string;
  color?: string;
}

interface StHeaderProps {
  isBookcase: string;
}

export default function MainHeader(props: MainHeaderProps) {
  const { children } = props;
  const { pathname } = useLocation();
  const isBookcase = pathname.startsWith("/bookcase") || pathname.startsWith("/add-book") ? "0.4rem" : "3.5rem";

  return (
    <StHeader isBookcase={isBookcase}>
      <h2>{children}</h2>
    </StHeader>
  );
}

const StHeader = styled.header<StHeaderProps>`
  margin: 3.5rem 4rem ${(props) => props.isBookcase} 4rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.3rem;
  color: ${({ theme }) => theme.colors.gray100};
`;
