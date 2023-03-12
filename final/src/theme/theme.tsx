import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { FC, ReactNode, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import useAppSelector from "../hooks/useAppSelector";
import { getIsLightTheme } from "../store/slices/settings";
import componentsOverrides from "./overrides";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const isLightTheme = useAppSelector(getIsLightTheme);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLightTheme ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
    }),
    [isLightTheme]
  );

  let theme = createTheme(themeOptions);

  // @ts-ignore
  theme.components = componentsOverrides(theme);

  theme = responsiveFontSizes(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
