import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-950 p-5">
      <div className="flex  justify-between items-center">
        <div className="text-white font-bold text-9xl max-sm:text-2xl my-4">
          Capstone
        </div>
        <div className="text-white border h-max w-max py-2 px-4 rounded-md">
          English
        </div>
      </div>
      <div className="text-white">
        &copy;{new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex flex-wrap text-white mt-10 ">
        <div className="w-44">
          <h2 className="text-red-200 py-2 uppercase">
            About CapStone
          </h2>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-44">
          <h2 className="text-red-200 py-2 uppercase">
            For RESTAURANTS
          </h2>
          <ul>
            <li>Partner with us</li>
            <li>Your Connect</li>
          </ul>
        </div>
        <div className="w-44">
          <h2 className="text-red-200 py-2 uppercase">
            Learn More
          </h2>
          <ul>
            <li>Privacy</li>
            <li>Security </li>
            <li>Team</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
