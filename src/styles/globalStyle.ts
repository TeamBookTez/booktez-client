import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    height: auto;
  }

  &::-webkit-scrollbar-thumb {
    height: 10rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white500};
  }

  /* @font-face {
    font-family: "Pretendard";
    font-weight: normal;
    font-style: normal;
    src: local("/fonts/PretendardVariable.woff2") format("woff2");
  } */
  /* font 로컬로 변경 대비하여 주석처리  */

  html {
    color: ${({ theme }) => theme.colors.gray100};
    font-family: Pretendard;
    font-size: 62.5%;
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

  button {
    padding: 0;
    cursor: pointer;
  }

  input {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
  }

  input:focus::-webkit-input-placeholder, 
  textarea:focus::-webkit-input-placeholder { 
    /* WebKit browsers */ 
    color:transparent; 
  } 
  input:focus:-moz-placeholder, 
  textarea:focus:-moz-placeholder { 
    /* Mozilla Firefox 4 to 18 */ 
    color:transparent; 
  } 
  input:focus::-moz-placeholder, 
  textarea:focus::-moz-placeholder { 
    /* Mozilla Firefox 19+ */ 
    color:transparent; 
  } 
  input:focus:-ms-input-placeholder, 
  textarea:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */ 
    color:transparent; 
  }
`;

export default GlobalStyle;
