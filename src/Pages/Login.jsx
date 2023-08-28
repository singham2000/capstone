import React from "react";
import Footer from "../Componenets/Footer";

const Login = () => {

  const [formData, setFormData] = React.useState({
    phone: '',
    password: ''
  });

  const LoginHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <div className="banner banner1 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Login</h1>
      </div>
      <div className="m-5 flex justify-center">
        <div className="bg-slate-300 w-11/12 rounded-3xl">
          <form onSubmit={LoginHandler} method="post" className="p-6 flex flex-col lg:w-1/2 ">
            <label htmlFor="phone">Enter Phone Number</label>
            <input type="text"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="h-10 bg-slate-300 p-2"
              id="phone"
              placeholder="Phone Number" />
            <label htmlFor="password">Enter Password</label>
            <input type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="h-10 bg-slate-300 p-2"
              id="pasword"
              placeholder="Password" />
            <div className="flex justify-center items-center">
              <button type="submit" className="mt-5 border-2 w-max border-red-500 p-2 rounded text-red-900 drop-shadow-2xl">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;