import Box from "@mui/material/Box";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";


const App = () => (
    <Box
        sx={{
            minHeight: "100vh",
            maxHeight: "100vh",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
        }}
    >
        <Header/>
        <Main/>
        <Footer/>
    </Box>
);

export default App;
