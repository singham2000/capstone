import React from "react";
import Navbar from "../Componenets/Navbar";
import Footer from "../Componenets/Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="banner banner1 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Login</h1>
      </div>
      <div className="m-5 flex justify-center">
        <div className="bg-slate-300 w-11/12 rounded-3xl">
            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
