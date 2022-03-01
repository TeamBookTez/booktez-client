import { DefaultTheme } from "styled-components";

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

const fonts = {
  h1: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  h2: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 2.2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  h3: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  h4: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  h5: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  h6: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  Body1: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.07rem;
  `,
  Body2: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.07rem;
  `,
  Body3: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  Caption1: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.3;
    letter-spacing: -0.07rem;
  `,
  Caption2: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.3;
    letter-spacing: -0.07rem;
  `,
  header: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 6.2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header00: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header001: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header0: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header1: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header2: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header3: `
    font-family: Pretendard;
    font-weight: 800;
    font-size: 2.2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  header4: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body00: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 1.5;
    letter-spacing: -0.07rem;
  `,
  body0: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body1: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body2: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body3: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body35: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: -0.07rem;
  `,
  body4: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: -0.1rem;
  `,
  body5: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  body6: `
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  caption: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  caption2: `
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  button: `
    font-family: Pretendard;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
  button2: `
    font-family: Pretendard;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
