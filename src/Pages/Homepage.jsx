import React from "react";
//Images Import
import Min_order from "../Assets/Images/no_min_order.webp";
import Live from "../Assets/Images/live_order.webp";
import Fast from "../Assets/Images/fast_delivery.webp";
import PlayStore from "../Assets/Images/play_store.webp";
import AppStore from "../Assets/Images/ios_store.webp";

const Homepage = () => {
  return (
    <div>
      <div className="banner banner1 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl max-sm:text-6xl">
          CapStone
        </h1>
      </div>
      <div className="w-full px-5 flex justify-center items-center flex-col">
        <h2 className="text-6xl py-10 font-thin">
          Find Your Next Meal Here 🤤
        </h2>
        <p className="w-1/2 py-10 text-lg text-center font-thin text-gray-600">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, CapStone covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </div>
      <div className="bg-red-950 w-full max-lg:h-96 max-sm:h-max">
        <div className="flex max-lg:flex-row max-sm:flex-col justify-around max-sm:items-center">
          <div className="w-max flex flex-col items-center">
            <img src={Min_order} alt="Minimum order" className="feature_img" />
            <div className="text-white mt-8 text-center">
              <h2>No Minimum order</h2>
              <p className="text-sm text-red-200 mt-5 whitespace-normal w-64">
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
          </div>
          <div className="w-max flex flex-col items-center">
            <img src={Live} alt="Minimum order" className="feature_img" />
            <div className="text-white mt-8 text-center">
              <h2>Live Order Tracking</h2>
              <p className="text-sm text-red-200 mt-5 whitespace-normal w-64">
                Know where your order is at all times, from the restaurant to
                your doorstep
              </p>
            </div>
          </div>
          <div className="w-max flex flex-col items-center">
            <img src={Fast} alt="Minimum order" className="feature_img" />
            <div className="text-white mt-8 text-center">
              <h2>Lightning-Fast Delivery</h2>
              <p className="text-sm text-red-200 mt-5 file:whitespace-normal w-64">
                Experience CapStone's superfast delivery for food delivered
                fresh & on time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-lg:flex-row justify-around items-center mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-extralight">
            Restraurants in your pocket
          </h1>
          <p className="text-gray-500">
            Order from your favorite restaurants & track on the go, with the
            all-new Capstone app.
          </p>
        </div>
        <div className="w-max mt-10 flex max-sm:flex-col" data-aos="fade-up">
          <img src={PlayStore} alt="play_store" width={250} className="m-5" />
          <img src={AppStore} alt="app_store" width={250} className="m-5" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
