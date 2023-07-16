import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LuMoreHorizontal } from "react-icons/lu";

const Navbar = () => {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <div className="drop-shadow-md min-w-full bg-gradient-to-r from-red-500 text-white h-12 text-center flex flex-row items-center px-5 justify-between">
        <h1 className="text_openSans font-extrabold">CapStone</h1>
        <div className="max-sm:hidden">
          <ul className="flex flex-row gap-2 text-orange-700">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/registerRestro"}>Register as Restaurent</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign up</Link>
            </li>
            <li>
              <Link to={"/login"}>Log in</Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2 border border-red-500 rounded-lg ease-in-out duration-150 hover:border-2 hover:border-red-400"
            onClick={() => {
              setExpand(expand ? false : true);
            }}
          >
            <LuMoreHorizontal className="stroke-red-500 stroke-2" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden p-5 h-2/3 drop-shadow-md min-w-full bg-gradient-to-r from-red-500 text-white ${
          expand ? "hidden" : "block"
        }`}
      >
        <ul className="flex flex-col gap-2 text-orange-200">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/registerRestro"}>Register as Restaurent</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
          <li>
            <Link to={"/login"}>Log in</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
