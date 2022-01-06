import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Router from "./components/Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
