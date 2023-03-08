import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import DoneListTasks from "../DoneListTasks/DoneListTasks";
import TodoListTasks from "../TodoListTasks/TodoListTasks";

const Main = () => (
  <Stack as="main" py={3} minHeight="100%" maxHeight="100%">
    <Container sx={{ height: "100%" }}>
      <Grid container spacing={2} height="100%">
        <Grid
          item
          md={6}
          xs={12}
          minHeight="100%"
          maxHeight="100%"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              minHeight: "50%",
              maxHeight: "50%",
            },
          })}
        >
          <Card
            sx={{
              pt: 3,
              minHeight: "100%",
              maxHeight: "100%",
              display: "flex",
            }}
          >
            <Stack width="100%">
              <Typography variant="h5" align="center" textTransform="uppercase" mb={3}>
                Todo
              </Typography>

              <TodoListTasks />
            </Stack>
          </Card>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          minHeight="100%"
          maxHeight="100%"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              minHeight: "50%",
              maxHeight: "50%",
            },
          })}
        >
          <Card
            sx={{
              pt: 3,
              minHeight: "100%",
              maxHeight: "100%",
              display: "flex",
            }}
          >
            <Stack width="100%">
              <Typography variant="h5" align="center" textTransform="uppercase" mb={3}>
                Done
              </Typography>

              <DoneListTasks />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Stack>
);

export default Main;
