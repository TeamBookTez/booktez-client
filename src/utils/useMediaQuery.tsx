import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile: React.FC = ({ children }) => {
  const isMobileScreen = useMediaQuery({
    query: "(max-width:415px)",
  });

  return <React.Fragment>{isMobileScreen && children}</React.Fragment>;
};

const Desktop: React.FC = ({ children }) => {
  const isDesktopScreen = useMediaQuery({
    query: "(min-width:416px) ",
  });

  return <React.Fragment>{isDesktopScreen && children}</React.Fragment>;
};

export { Desktop, Mobile };