import { FC } from "react";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/material/Stack";
import { ActionBar, DoneCard, TodoCard } from "../sections/home";

const GridItemStyled = styled(Grid)(({ theme }) => ({
  minHeight: "100%",
  maxHeight: "100%",
  [theme.breakpoints.down("md")]: {
    minHeight: "50%",
    maxHeight: "50%",
  },
}));

const HomePage: FC = () => (
  <Stack height="100%">
    <ActionBar />

    <Stack height={{ md: `calc(100% - 60.5px)`, xs: "calc(100% - 48.5px)" }}>
      <Grid container height="100%">
        <GridItemStyled item md={6} xs={12} pr={{ md: 1 }} pb={{ md: 0, xs: 0.5 }}>
          <TodoCard />
        </GridItemStyled>

        <GridItemStyled item md={6} xs={12} pl={{ md: 1 }} pt={{ md: 0, xs: 0.5 }}>
          <DoneCard />
        </GridItemStyled>
      </Grid>
    </Stack>
  </Stack>
);

export default HomePage;
