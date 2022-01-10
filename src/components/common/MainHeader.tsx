import styled from "styled-components";

interface MainHeaderProps {
  children: string;
  color?: string;
}

interface StHeaderProps {
  color: string;
}

export default function MainHeader({ children, color = "#242424" }: MainHeaderProps) {
  return (
    <StHeader color={color}>
      <h2>{children}</h2>
    </StHeader>
  );
}

const StHeader = styled.header<StHeaderProps>`
  margin: 3.5rem 4rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.3rem;
  color: ${(props) => props.color};
`;
