import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <StWrapper>{children}</StWrapper>;
}

const StWrapper = styled.main`
  position: relative;
  width: calc(100% - 17.5rem); //NAV_WRAPPER_WIDTH
  height: 100vh;
  overflow-y: scroll;

  margin-left: 17.5rem; //NAV_WRAPPER_WIDTH

  border-radius: 2rem 0 0 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
`;
