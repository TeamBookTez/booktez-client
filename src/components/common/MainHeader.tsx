import { useLocation } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

interface MainHeaderProps {
  children: string;
  color?: string;
}

interface StHeaderProps {
  color: string;
  isBookcase: string;
}

export default function MainHeader({ children, color = theme.colors.gray100 }: MainHeaderProps) {
  const { pathname } = useLocation();
  const isBookcase = pathname.startsWith("/bookcase") ? "0.4rem" : "3.5rem";

  return (
    <StHeader color={color} isBookcase={isBookcase}>
      <h2>{children}</h2>
    </StHeader>
  );
}

const StHeader = styled.header<StHeaderProps>`
  margin: 3.5rem 4rem ${(props) => props.isBookcase} 4rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.3rem;
  color: ${(props) => props.color};
`;
