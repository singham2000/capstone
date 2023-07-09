// React Router is Imported to solve routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages Import
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";

//CSS import
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
