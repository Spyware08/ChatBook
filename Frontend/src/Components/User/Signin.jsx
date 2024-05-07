import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import API from '../../API/API'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import "./signup.css"
import "./signin.css"

const Signin = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        if (email.current.value.length>0 
            && password.current.value.length>0) {

            let log_data = {
                email: email.current.value,
                password: password.current.value
            }

            try {
                const res = await API.post("/login", log_data)
                sessionStorage.setItem("userData", JSON.stringify(res.data.userdata));
                navigate("/")
            } catch (e) {
                console.error(e.response.status);
                if(e.response.status===404){
                    return toast.info("Username not found")
                }
                else if(e.response.status===401){
                    return toast.info("Passward not matched")

                }

            }
        }
        else return toast.error("Invalid Details")
    }

    return (
        <>
            <div className='signin_main'>
                <div className='siginin_content'>
                    <h1>Login  Here</h1>
                </div>
                <div className='signin_input'>
                    <input type="text" placeholder='Username' ref={email} />
                    <input type="passward" placeholder='Passward' ref={password} />

                </div>
                <div className='signin_btn'>
                    <button className='signin_log' onClick={handleSubmit} >Login</button>
                </div>
                {/* <div className='signin_footer_p'>
                    <p>Or Login with <span>Google</span></p>
                </div> */}
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
    )
}

export default Signin