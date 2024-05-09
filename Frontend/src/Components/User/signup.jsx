import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import API from '../../API/API'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css"

export default function Signup() {
    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()


    async function handleSubmit(e) {

        if (firstname.current.value.length > 0
            && lastname.current.value.length > 0
            && password.current.value.length > 0
            && email.current.value.length > 0) {
            const signup_data = {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                password: password.current.value,
                email: email.current.value
            };
            console.log("Signup data from forntend", signup_data);
            try {
                await API.post("/signup", signup_data).then(e => {
                    // console.log("data created");
                    toast.success("Account created")
                    setTimeout(() => {
                        return navigate("/")

                    }, 1500)
                })
            } catch (e) {
                // console.log("err", e.response.status);
                if (e.response.status === 409) {
                    return toast.error("Email Already exist")
                }
                else return toast.error("Response error")

            }
        }
        else return toast.error("Invalid details ")
    }
    return (
        <>
            <div className='signup_content'>
                <div>
                    <div className='signup_head'>
                        <h1>Create a new Account</h1>
                        <p>To use our website, Please enter your details</p>
                    </div>
                    <div className='signup_input'>
                        <label>Firstname</label><br />
                        <input type="text" required ref={firstname} /><br />
                        <label>lastname</label><br />
                        <input type="text" required ref={lastname} /><br />
                        <label>Email</label><br />
                        <input type="email" required ref={email} /><br />
                        <label>Passward</label><br />
                        <input type="password" required ref={password} />
                    </div>
                    <div className='signup_btn'>
                        <button onClick={handleSubmit}>Submit</button>
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
            </div>



        </>
    )
}
