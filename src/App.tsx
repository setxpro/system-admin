import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/useTheme";
import RoutesApp from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
