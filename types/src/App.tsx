import { FC } from "react";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App: FC = () => (
  <Box
    sx={{
      minHeight: "100vh",
      maxHeight: "100vh",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
    }}
  >
    <Header />
    <Main />
    <Footer />
  </Box>
);

export default App;
