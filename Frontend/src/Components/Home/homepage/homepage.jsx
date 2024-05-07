import React from 'react'
import "./homepage.css"
import { NavLink } from 'react-router-dom'
const Homepage = () => {
  let userData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <>
      <div className='homepage_head'>
        <div className='homepage'>
          <NavLink to="/profile"><img src="../img/profile.jpg" alt="" /></NavLink>
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
    </>
  )
}

export default Homepage