import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./home.css"
import Nav from '../../Navbar/Nav'
import Userinfo from '../../idinfo/userinfo'


const Home = () => {
  const navigate = useNavigate()
  const checkToken = useNavigate()
  const [show, setshow] = useState(false)
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

  if (!userData) {
    return checkToken("/auth")

  }

  function toggleclass() {
    setshow(!show)
  }
  function logout() {
    sessionStorage.clear();
    navigate("/")
  }
  // console.log(userData.profile_path.length);


  return (
    <div>
      <div className='home'>
        <div className='home_head'>
          <div className='home_head_logo'>
            <img src="./img/MLogo.png" alt="Chatbook" />
            <h1>ChatBook</h1>
          </div>
          <div className='home_profile'>
            <h3>{userData.firstname}</h3>
            <img src={profile_img} alt="" onClick={toggleclass} />
            <NavLink to="/" onClick={logout} className="home_logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></NavLink>

          </div>
        </div>
        <hr />
        <div className={show ? "visible" : "hidden"}>
          <div className='idcard'>
            <Userinfo />
          </div>

        </div>
        <div className='home_container'>
          <Nav />
          <div>
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home