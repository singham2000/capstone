// React Router is Imported to solve routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages Import
import Homepage from "./Pages/Homepage";
import RegisterRestro from "./Pages/RegisterRestro";
import RestroListing from './Pages/RestroListing';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import FoodList from "./Pages/FoodList";


// Components imports 
import Navbar from "./Componenets/Navbar";
import Footer from "./Componenets/Footer";

//CSS import
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registerRestro" element={<RegisterRestro />} />
        <Route path="/restroList" element={<RestroListing />} />
        <Route path="/foodList" element={<FoodList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
