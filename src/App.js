// React Router is Imported to solve routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages Import
import Homepage from "./Pages/Homepage";
import RegisterRestro from "./Pages/RegisterRestro";
import Login from "./Pages/Login";
import Navbar from "./Componenets/Navbar";
import Signup from "./Pages/Signup";

//CSS import
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registerRestro" element={<RegisterRestro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
