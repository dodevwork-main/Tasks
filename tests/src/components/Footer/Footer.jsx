import Stack from "@mui/material/Stack";
import DoDevWork from "../DoDevWork/DoDevWork";

const Footer = () => (
  <Stack
    as="footer"
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
