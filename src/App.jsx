import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import { ThemeProvider, createTheme } from "@mui/material";


const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
  <ThemeProvider theme={customTheme}>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
  </ThemeProvider>);
}

export default App;
