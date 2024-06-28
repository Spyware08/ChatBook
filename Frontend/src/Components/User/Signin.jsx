import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import API from '../../API/API';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import "./signup.css";
import "./signin.css";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('demouser@gmail.com'); 
    const [password, setPassword] = useState('12345678'); 

    async function handleSubmit(e) {
        e.preventDefault();
        if (email.length > 0 && password.length > 0) {
            let log_data = {
                email: email,
                password: password
            };

            try {
                const res = await API.post("/login", log_data);
                sessionStorage.setItem("userData", JSON.stringify(res.data.userdata));
                navigate("/welcome");
            } catch (e) {
                console.error(e.response.status);
                if (e.response.status === 404) {
                    toast.info("Username not found");
                } else if (e.response.status === 401) {
                    toast.info("Password not matched");
                }
            }
        } else {
            toast.error("Invalid Details");
        }
    }

    return (
        <>
            <div className='signin_main'>
                <div className='siginin_content'>
                    <h1>Login Here</h1>
                </div>
                <div className='signin_input'>
                    <input
                        type="text"
                        placeholder='Username'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='signin_btn'>
                    <button className='signin_log' onClick={handleSubmit}>Login</button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default Signin;
