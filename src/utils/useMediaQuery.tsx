import React from "react";
import { useMediaQuery } from "react-responsive";

interface Children {
  children: React.ReactNode;
}

const Mobile = (props: Children) => {
  const { children } = props;
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 1439px)",
  });

  return <React.Fragment>{isMobileScreen && children}</React.Fragment>;
};

const Desktop = (props: Children) => {
  const { children } = props;
  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1440px) ",
  });

  return <React.Fragment>{isDesktopScreen && children}</React.Fragment>;
};

export { Desktop, Mobile };
