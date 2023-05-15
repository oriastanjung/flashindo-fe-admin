import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material";
import Users from "./pages/Users";


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
    <Route path="/users" element={<Users />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
  </ThemeProvider>);
}

export default App;
