import React from 'react'
import "./userinfo.css"

const Userinfo = () => {
    let userData = JSON.parse(sessionStorage.getItem("userData"));

    return (
        <div className='userinfo_main'>
            <div className='userinfo_head'>
                <div className='userinfo_img'>
                    <div>
                        <img src="./img/profile.jpg" alt="" />
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