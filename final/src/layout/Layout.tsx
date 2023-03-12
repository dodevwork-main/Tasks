import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Footer, Header } from "./components";

const Layout: FC = () => (
  <Box
    sx={{
      minHeight: "100vh",
      maxHeight: "100vh",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
    }}
  >
    <Header />
    <Stack component="main" py={3} minHeight="100%" maxHeight="100%">
      <Container sx={{ height: "100%" }}>
        <Outlet />
      </Container>
    </Stack>
    <Footer />
  </Box>
);

export default Layout;
