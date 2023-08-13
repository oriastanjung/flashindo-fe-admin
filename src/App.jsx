import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Categories from "./pages/Categories";


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
    <Route path="/products" element={<Products />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
  </Routes>
  </ThemeProvider>);
}

export default App;
