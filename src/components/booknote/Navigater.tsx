import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function Navigater() {
  const [navIndex, setNavIndex] = useState<number>(0);

  return (
    <StNav>
      <StUl>
        <StList>
          <StLink1 to="" onClick={() => setNavIndex(0)} index={navIndex}>
            독서 전
          </StLink1>
        </StList>
        <StList>
          <StLink2 to="peri" onClick={() => setNavIndex(1)} index={navIndex}>
            독서 후
          </StLink2>
        </StList>
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

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StUl = styled.ul`
  display: flex;
`;

const StList = styled.li``;

const StLink1 = styled(Link)<{ index: number }>`
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
