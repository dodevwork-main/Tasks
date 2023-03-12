import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { FC } from "react";

const DoDevWork: FC = () => (
  <Stack
    sx={(theme) => ({
      color: theme.palette.primary.light,
      "&:hover": {
        color: "white",
      },
    })}
  >
    <Link color="inherit" underline="none" target="_blank" href="https://github.com/dodevwork-main">
      @dodevwork
    </Link>
  </Stack>
);

export default DoDevWork;
