import styled from "styled-components";

interface MainHeaderProps {
  children: string;
}

export default function MainHeader(props: MainHeaderProps) {
  const children = props.children;

  return (
    <StHeader>
      <h2>{children}</h2>
    </StHeader>
  );
}

const StHeader = styled.header`
  margin: 3.5rem 4rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.3rem;
`;
