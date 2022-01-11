import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <StWrapper>{children}</StWrapper>;
}

const StWrapper = styled.main`
  flex: 1;
  border-radius: 2rem 0 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: pretendard;
`;
