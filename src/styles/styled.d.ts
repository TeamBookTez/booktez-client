import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange100: string;
      orange200: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      white: string;
      white200: string;
      white300: string;
      white400: string;
      white500: string;
      red100: string;
    };
    fonts: {
      header0: string;
      header1: string;
      header2: string;
      header3: string;
      header4: string;
      body0: string;
      body1: string;
      body2: string;
      body3: string;
      body4: string;
      body5: string;
      body6: string;
      caption: string;
      button: string;
      button2: string;
    };
  }
}
