import React, { useState } from 'react';
import './auth.css';
import Signup from './signup';
import Signin from './Signin';

export default function Auth() {
    const [showSignin, setShowSignin] = useState(true);

    const handleClick = (e) => {
        setShowSignin(e);
    };

    return (
        <>
            <div className='auth_1'>
                <div className='auth_header'>
                    <div className='auth_logo'>
                        <div>
                            <img src="./img/MLogo.png" alt="Logo" /><h1>ChatBook</h1>
                        </div>
                        <p>Stay Connected With Friends & Family</p><br />
                    </div>
                    <hr />
                    <div className='auth_content'>
                        <br />
                        <div className='auth_btn'>
                            <button onClick={() => handleClick(true)}>Login</button>
                            <button onClick={() => handleClick(false)}>Signup</button>
                        </div>
                        {showSignin ? <Signin /> : <Signup />}
                    </div>
                    <div className='auth_footer'>
                        <p>About Us</p><hr />
                        <p>Term and condition</p><hr />
                        <p>Help</p>
                    </div>
                </div>
                <div className='auth_img'>
                    <img src="./img/main2.png" alt="Main" />
                </div>
            </div>
        </>
    );
}
