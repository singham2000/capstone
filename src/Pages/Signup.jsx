import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const LoginHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            axios.post(' http://localhost:5000/addUser', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            }).then((response) => {
                const data = response.data;
                if (data.status) {
                    alert('Created Successfully');
                    navigate('/');
                } else {
                    alert(data.message);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div className="banner banner1 flex justify-center items-center">
                <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Signup</h1>
            </div>
            <div className="m-5 flex justify-center">
                <div className="bg-slate-300  w-2/5 max-sm:w-2/3 rounded-3xl">
                    <form onSubmit={LoginHandler} method="post" className="p-6 flex flex-col lg:w-1/2 ">

                        <label htmlFor="name">Enter Your Name</label>
                        <input type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="h-10 bg-slate-300 p-2"
                            id="name"
                            placeholder="Name" />
                        <label htmlFor="name">Enter Your Email</label>
                        <input type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="h-10 bg-slate-300 p-2"
                            id="email"
                            placeholder="Email" />
                        <label htmlFor="phone">Enter Phone Number</label>
                        <input type="phone"
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

export default Signup;