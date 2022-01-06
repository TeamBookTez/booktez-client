import { ThemeProvider } from "styled-components";

import Router from "./components/Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;