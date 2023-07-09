import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="drop-shadow-md min-w-full bg-gradient-to-r from-red-500 text-white h-12 text-center flex flex-row items-center px-5 justify-between">
        <h1 className="text_openSans font-extrabold">CapStone</h1>
        <div>
          <ul className="flex flex-row gap-2 text-orange-700">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
