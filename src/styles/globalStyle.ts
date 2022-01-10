import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/PretendardVariable.woff2") format("woff2");
  }

  html {
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 62.5%;
  }

  #root {
   display: flex;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }

  input {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
