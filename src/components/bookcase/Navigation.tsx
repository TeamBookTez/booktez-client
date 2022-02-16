import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

interface NavigationProps {
  navIndex: number;
  onChangeNavIndex: (idx: number) => void;
}

export default function Navigation(props: NavigationProps) {
  const { navIndex, onChangeNavIndex } = props;

  const shadowingAni = useAnimation();
  const { scrollY } = useViewportScroll();
  const MAIN_HEADER_HEIGHT = 109;

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > MAIN_HEADER_HEIGHT) {
        shadowingAni.start({
          boxShadow: "0rem 0.6rem 1rem rgba(0, 0, 0, 0.17)",
        });
      } else {
        shadowingAni.start({
          boxShadow: "initial",
        });
      }
    });
  }, [scrollY]);

  return (
    <StNav animate={shadowingAni} initial={{ boxShadow: "initial" }}>
      <StUl>
        <StList onClick={() => onChangeNavIndex(0)}>전체</StList>
        <StList onClick={() => onChangeNavIndex(1)}>독서 전</StList>
        <StList onClick={() => onChangeNavIndex(2)}>독서 중</StList>
        <StList onClick={() => onChangeNavIndex(3)}>독서 완료</StList>
      </StUl>
      <StBottomLine>
        <StOrangLine index={navIndex} />
      </StBottomLine>
    </StNav>
  );
}

const StNav = styled(motion.nav)`
  position: sticky;
  top: 0;

  z-index: 10;

  padding-top: 3.3rem;
  padding-left: 4rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const StUl = styled.ul`
  display: flex;
`;

const StList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 4.8rem;

  text-align: center;
  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StBottomLine = styled.div`
  position: absolute;
  bottom: 0;

  width: 35.2rem;
  height: 0.3rem;

  background-color: ${({ theme }) => theme.colors.white200};
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
