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
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: pretendard;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    height: auto;
  }

  &::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white500};
  }
`;
