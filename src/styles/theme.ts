import { css, DefaultTheme } from "styled-components";

const colors = {
  orange000: "#FF3D00",
  orange100: "#FF4C00",
  orange200: "#FFF1EB",
  orange300: "#FF7F49",
  orange400: "#FFAD8A",
  orange500: "#FFE9E0",
  gray100: "#242424",
  gray200: "#3D3D3D",
  gray300: "#555555",
  gray400: "#6F6F6F",
  white: "#FFFFFF",
  white200: "#F7F7F7",
  white300: "#EFEFEF",
  white400: "#DFDFDF",
  white500: "#C1C1C1",
  red100: "#CE2525",
};

interface Font {
  weight: 400 | 500 | 600 | 700 | 800;
  size: number;
  height: "default" | "long";
  spacing: "default" | "close";
}

interface TempFont extends Omit<Font, "height"> {
  height: number;
}

const getFontheight = (height: Font["height"]): 1.3 | 1.5 => {
  switch (height) {
    case "default":
      return 1.3;
    case "long":
      return 1.5;
  }
};

const getFontSpaceing = (spacing: Font["spacing"]): -0.1 | -0.07 => {
  switch (spacing) {
    case "default":
      return -0.1;
    case "close":
      return -0.07;
  }
};

function FONT({ weight, size, height, spacing }: Font | TempFont) {
  return css`
    font-family: Pretendard;
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${typeof height === "number" ? height : getFontheight(height)};
    letter-spacing: ${getFontSpaceing(spacing)}rem;
  `;
}

const fonts = {
  h1: FONT({ weight: 800, size: 3, height: "default", spacing: "default" }),
  h2: FONT({ weight: 800, size: 2.2, height: "default", spacing: "default" }),
  h3: FONT({ weight: 700, size: 1.8, height: "default", spacing: "default" }),
  h4: FONT({ weight: 800, size: 1.6, height: "default", spacing: "default" }),
  h5: FONT({ weight: 400, size: 1.6, height: "default", spacing: "default" }),
  h6: FONT({ weight: 500, size: 1.5, height: "default", spacing: "default" }),
  Body1: FONT({ weight: 500, size: 1.4, height: "long", spacing: "close" }),
  Body2: FONT({ weight: 400, size: 1.4, height: "long", spacing: "close" }),
  Body3: FONT({ weight: 500, size: 1.4, height: "default", spacing: "default" }),
  Caption1: FONT({ weight: 500, size: 1.3, height: "default", spacing: "close" }),
  Caption2: FONT({ weight: 400, size: 1.3, height: "default", spacing: "close" }),
  header: FONT({ weight: 700, size: 6.2, height: "default", spacing: "default" }),
  header00: FONT({ weight: 800, size: 4, height: "default", spacing: "default" }),
  header001: FONT({ weight: 800, size: 4.8, height: "default", spacing: "default" }),
  header0: FONT({ weight: 800, size: 3, height: "default", spacing: "default" }),
  header1: FONT({ weight: 800, size: 2.4, height: "default", spacing: "default" }),
  header2: FONT({ weight: 700, size: 2.4, height: "default", spacing: "default" }),
  header3: FONT({ weight: 800, size: 2.2, height: "default", spacing: "default" }),
  header4: FONT({ weight: 700, size: 2, height: "default", spacing: "default" }),
  body00: FONT({ weight: 500, size: 2.4, height: "long", spacing: "close" }),
  body0: FONT({ weight: 500, size: 2, height: "default", spacing: "default" }),
  body1: FONT({ weight: 700, size: 1.8, height: "default", spacing: "default" }),
  body2: FONT({ weight: 500, size: 1.8, height: "default", spacing: "default" }),
  body3: FONT({ weight: 400, size: 1.8, height: "default", spacing: "default" }),
  body35: FONT({ weight: 400, size: 1.8, height: "default", spacing: "close" }),
  body4: FONT({ weight: 400, size: 1.8, height: "default", spacing: "default" }),
  body5: FONT({ weight: 700, size: 1.6, height: "default", spacing: "default" }),
  body6: FONT({ weight: 400, size: 1.6, height: "default", spacing: "default" }),
  caption: FONT({ weight: 500, size: 1.4, height: "default", spacing: "default" }),
  caption2: FONT({ weight: 500, size: 1.2, height: "default", spacing: "default" }),
  button: FONT({ weight: 700, size: 1.8, height: "default", spacing: "default" }),
  button2: FONT({ weight: 600, size: 1.4, height: "default", spacing: "default" }),
  // 반응형 랜딩페이지 버튼 글꼴 임의 지정
  button3: FONT({ weight: 800, size: 1.6, height: 2.08, spacing: "default" }),
  button4: FONT({ weight: 800, size: 1.4, height: 2.82, spacing: "default" }),
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
