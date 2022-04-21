import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface StickyHeaderProps {
  children: React.ReactNode;
}
export default function StickyHeader(props: StickyHeaderProps) {
  const { children } = props;

  const { scrollY } = useViewportScroll();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const MAIN_HEADER_HEIGHT = 109;

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > MAIN_HEADER_HEIGHT) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  return <StWrapper isscroll={isScroll}>{children}</StWrapper>;
}

const StWrapper = styled.div<{ isscroll: boolean }>`
  position: sticky;
  top: 0rem;
  z-index: 5;

  border-radius: 2rem 0 0 0;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isscroll }) =>
    isscroll
      ? css`
          box-shadow: 0rem 0.6rem 1rem rgba(0, 0, 0, 0.17);
        `
      : css`
          box-shadow: none;
        `};
`;
