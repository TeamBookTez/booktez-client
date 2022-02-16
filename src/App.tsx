import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import Router from "./components/Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
