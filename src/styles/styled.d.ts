import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange100: string;
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
  }
}
