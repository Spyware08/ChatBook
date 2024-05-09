import React, { useState, useEffect } from 'react'
import "./userinfo.css"

const Userinfo = () => {
    const [profile_img, setProfile_img] = useState("")

    let userData = JSON.parse(sessionStorage.getItem("userData"));

    const defaultimg = "./img/profile.jpg"

    useEffect(() => {
        if (userData && userData.profile_path && userData.profile_path.length > 0) {
            setProfile_img(userData.profile_path);
        } else {
            setProfile_img(defaultimg);
        }
    }, [userData]);

    return (
        <div className='userinfo_main'>
            <div className='userinfo_head'>
                <div className='userinfo_img'>
                    <div>
                        <img src={profile_img} alt="" />
                        <h2>{userData.firstname}</h2>
                        <p>ID:{userData.email}</p>
                    </div>
                </div>


                <div>
                    <table className='userinfo_table'>
                        <tr>
                            <th>Gender :</th>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <th>Number :</th>
                            <td>+9198663746382</td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <th>D.O.B.</th>
                            <td>01/JAN/2000</td>
                        </tr>
                    </table>

                </div>
                <div className='userinfo_footer'>
                    <h3>Other User Platform :- </h3>
                </div>
                <div className='userinfo_icn'>
                    <i class="fa-brands fa-whatsapp whatsapp"></i>
                    <i class="fa-brands fa-youtube youtube"></i>
                    <i class="fa-brands fa-facebook facebook"></i>
                    <i class="fa-brands fa-instagram instagram"></i>
                    <i class="fa-brands fa-linkedin linkedin "></i>
                </div>
            </div>

        </div>
    )
}

export default Userinfo