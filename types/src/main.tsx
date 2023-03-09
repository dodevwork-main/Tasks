// React
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
// Reset Styles
import { CssBaseline } from "@mui/material";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// App Component
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </StrictMode>
);
