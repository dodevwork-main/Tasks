import { Theme } from "@mui/material/styles/createTheme";
import Button from "./Button";
import CssBaseline from "./CssBaseline";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const componentsOverrides = (theme: Theme) => ({
  ...Button(),
  ...CssBaseline(),
});

export default componentsOverrides;
