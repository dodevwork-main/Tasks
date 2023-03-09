import Stack from "@mui/material/Stack";
import { FC } from "react";
import DoDevWork from "./DoDevWork";

const Footer: FC = () => (
  <Stack
    component="footer"
    direction="row"
    justifyContent="flex-end"
    alignItems="flex-end"
    minHeight="50px"
    sx={(theme) => ({ background: theme.palette.primary.light })}
  >
    <DoDevWork />
  </Stack>
);

export default Footer;
