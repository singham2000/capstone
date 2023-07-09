import React from "react";
import Navbar from "../Componenets/Navbar";

import banner from "../Assets/Images/banner1.webp";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="banner flex justify-center items-center">
        <h1 className="text-white font-bold italic text-9xl">
          CapStone
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
