/* eslint-disable no-unused-vars */
import React from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
const Login = () => {
  const [cookie, setCookie] = useCookies(['name']);
  const [formData, setFormData] = React.useState({
    phone: '',
    password: ''
  });

  const LoginHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/loginUser', {
      phone: formData.phone,
      password: formData.password
    }).then((res) => {
      const data = res.data;
      if (data.status) {
        setCookie('jwt', data.token);
      }
    })

  }
  return (
    <div>
      <div className="banner banner1 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Login</h1>
      </div>
      <div className="m-5 flex justify-center items-center w-screen">
        <div className="bg-slate-300 w-2/5 max-sm:w-2/3 rounded-3xl">
          <form onSubmit={LoginHandler} method="post" className="p-6 flex flex-col">
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
    </div>
  );
};

export default Login;