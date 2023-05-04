import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
  </>);
}

export default App;
