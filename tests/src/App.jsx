import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => (
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
