import React, { useState, useEffect } from 'react'
import "./homepage.css"
import { NavLink } from 'react-router-dom'
const Homepage = () => {
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  const [profile_img, setProfile_img] = useState("")


  const defaultimg = "./img/profile.jpg"

  useEffect(() => {
    if (userData && userData.profile_path && userData.profile_path.length > 0) {
      setProfile_img(userData.profile_path);
    } else {
      setProfile_img(defaultimg);
    }
  }, [userData]);

  return (
    <>
      <div className='homepage_flex'>
        <div className='homepage_head'>
          <div className='homepage'>
            <NavLink to="/profile"><img src={profile_img} alt="" /></NavLink>
            <h1>Welcome <span>{userData.firstname}</span></h1>
            <p>Stay connected with Family and Friends</p>
          </div>
          <br /><br />


          <div className='homepage_footer'>
            <h3>Here you connect and share with the people in your life.</h3>
            <hr />
            <div>
              <p>© 2023 ChatBook</p>
              <p>Help</p>
              <p>Business</p>
              <p>All rights reserved</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage