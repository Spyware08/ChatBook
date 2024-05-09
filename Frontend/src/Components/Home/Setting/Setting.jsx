import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./setting.css"

export default function Setting() {
    const navigate = useNavigate()

    const Navigate = () => {
        navigate("/profile_Upload")
    }

    return (
        <>
            <div className='setting_head'>
                <h2>Settings</h2><br /> </div>
                <div className='setting'>
                    <button onClick={Navigate}>Profile upload</button>
                    <button>Other</button>
                    <button>Other</button>
                    <button>Other</button>
                    <button>Other</button>

                </div>        </>)
}
