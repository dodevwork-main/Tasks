import { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import { getIsLightTheme, switchTheme } from "../../store/slices/settings";
import useAppDispatch from "../../hooks/useAppDispatch";
import PATHS from "../../routes/paths";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const isLightTheme = useAppSelector(getIsLightTheme);

  const handleTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      minHeight="70px"
      sx={(theme) => ({ background: theme.palette.primary.light })}
      px={4}
    >
      <Link to={PATHS.root}>
        <Typography variant="h4" color="white">
          Tasks - Final
        </Typography>
      </Link>

      <IconButton onClick={handleTheme}>{isLightTheme ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </Stack>
  );
};

export default Header;
