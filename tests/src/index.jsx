// React
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
// Reset Styles
import CssBaseline from "@mui/material/CssBaseline";
// Redux
import { Provider } from "react-redux";
import setupStore from "./store/store";
// App Component
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <CssBaseline />
      <App />
    </Provider>
  </StrictMode>
);
