import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "PretendardBold";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Pretendard-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "PretendardExtraBold";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Pretendard-ExtraBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "PretendardMedium";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Pretendard-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "PretendardSemiBold";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Pretendard-SemiBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "PretendardRegular";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Pretendard-Regular.ttf") format("truetype");
  }

  html {
    color: ${({ theme }) => theme.colors.gray100};
    font-family: PretendardRegular;
    font-size: 62.5%;
  }

  /* #root {
   display: flex;
  } */

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

  button {
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
