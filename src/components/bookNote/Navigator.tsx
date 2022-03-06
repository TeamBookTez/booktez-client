import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

interface NavigatorProps {
  navIndex: number;
  onNav: (idx: number) => void;
  isPrevented: boolean;
  onSetDrawerAsDefault: () => void;
  onSetIsSave: (isTrue: boolean) => void;
}

export default function Navigator(props: NavigatorProps) {
  const { navIndex, onNav, isPrevented, onSetDrawerAsDefault, onSetIsSave } = props;

  const navigate = useNavigate();

  const goToPre = () => {
    onSetIsSave(true);
    if (navIndex) {
      setTimeout(() => {
        onSetIsSave(false);
        navigate("");
        onNav(0);
        onSetDrawerAsDefault();
      }, 0);
    }
  };

  const goToPeri = () => {
    onSetIsSave(true);
    if (!navIndex && !isPrevented) {
      setTimeout(() => {
        onSetIsSave(false);
        navigate("peri");
        onNav(1);
        onSetDrawerAsDefault();
      }, 0);
    }
  };

  return (
    <StNav>
      <StUl>
        <li>
          <StLink1 onClick={goToPre} index={navIndex}>
            독서 전
          </StLink1>
        </li>
        <li>
          <StLink2 onClick={goToPeri} index={navIndex}>
            독서 중
          </StLink2>
        </li>
      </StUl>
      <StBottomLine>
        <StOrangLine index={navIndex} />
      </StBottomLine>
    </StNav>
  );
}

const StNav = styled.nav`
  position: sticky;
  top: 0;

  width: 100%;

  margin-top: 4.3rem;
`;

const StUl = styled.ul`
  display: flex;
`;

const StLink1 = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 4.8rem;

  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.3rem;
  letter-spacing: -0.1;

  cursor: pointer;

  ${({ index }) =>
    index === 0
      ? css`
          color: ${({ theme }) => theme.colors.orange300};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray300};
        `};
`;

const StLink2 = styled(StLink1)<{ index: number }>`
  ${({ index }) =>
    index === 1
      ? css`
          color: ${({ theme }) => theme.colors.orange300};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray300};
        `};
`;

const StBottomLine = styled.div`
  position: absolute;
  bottom: 0;

  width: 17.6rem;
  height: 0.3rem;

  background-color: ${({ theme }) => theme.colors.white400};
`;

const StOrangLine = styled.span<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 8.8rem;
  height: 0.3rem;

  background-color: ${({ theme }) => theme.colors.orange100};

  transition: transform 250ms ease;
  transform: translateX(${({ index }) => index * 8.8}rem);
`;
