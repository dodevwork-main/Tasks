import { FC } from "react";
import Router from "./routes";
import ThemeProvider from "./theme/theme";

const App: FC = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default App;
