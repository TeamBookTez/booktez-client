import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { Loading } from "./components/common";
import Router from "./components/Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
