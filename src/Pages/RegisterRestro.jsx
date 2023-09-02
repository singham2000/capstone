import React, { useState } from "react";
import axios from 'axios';

const RegisterRestro = () => {
  const [formData, setFormData] = useState({
    restro_name: "",
    address: "",
    open_time: "",
    close_time: "",
  });

  const submit = () => {
    console.log(formData); // TODO add API call to register the restaurant in our database
    axios.post('http://localhost:5000/addRestaurant', {
      name: formData.restro_name,
      address: formData.address,
      openingTime: formData.open_time,
      closingTime: formData.close_time
    }).then((res) => {
      const data = res.data;
      console.log(data);
      if (data.status) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
  };

  return (
    <div>
      <div className="banner banner2 flex justify-center items-center">
        <h1 className="text-white font-bold text-6xl max-sm:text-3xl">
          Partner with Capstone
        </h1>
      </div>
      <form className="p-6 flex flex-col lg:w-1/2 ">
        <input
          type="text"
          name="restro_name"
          id="restro_name"
          placeholder="Restraurent Name"
          className="h-10 bg-"
          onChange={(e) =>
            setFormData({ ...formData, restro_name: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Restaurent Address"
          className="h-10"
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <br />
        <div className="flex justify-between">
          <label htmlFor="open_time" className="text-sm">
            Opening Time:
          </label>
          <input
            type="time"
            name="open_time"
            id="open_time"
            placeholder="Opening Time"
            value={formData.open_time}
            onChange={(e) =>
              setFormData({ ...formData, open_time: e.target.value })
            }
          />
          <br />
          <label htmlFor="close_time" className="text-sm">
            Closing Time:
          </label>
          <input
            type="time"
            name="close_time"
            id="close_time"
            placeholder="Closing Time"
            value={formData.close_time}
            onChange={(e) =>
              setFormData({ ...formData, close_time: e.target.value })
            }
          />
          <br />
        </div>
        <input
          type="button"
          value="Submit"
          onClick={submit}
          className="mt-5 border-2 w-max border-red-500 p-2 rounded text-red-900 drop-shadow-2xl"
        />
      </form>
    </div>
  );
};

export default RegisterRestro;
