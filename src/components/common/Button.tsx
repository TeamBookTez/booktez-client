import styled from "styled-components";

interface ButtonProps {
  children: string;
}

export default function Button(props: ButtonProps) {
  const children = props.children;

  return <StButton>{children}</StButton>;
}

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.1rem;
  height: 3.2rem;
  border-radius: 2.1rem;
  background-color: ${({ theme }) => theme.colors.orange100};

  font-size: 1.6rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.white};
`;
