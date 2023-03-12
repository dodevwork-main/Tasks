import { FC } from "react";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

const Loading: FC = () => (
  <Stack height="100%" justifyContent="center" alignItems="center">
    <CircularProgress />
  </Stack>
);

export default Loading;
