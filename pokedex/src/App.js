import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router></Router>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
