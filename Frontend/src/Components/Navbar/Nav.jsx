import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='home_nav'>
                <div className='nav_component'>
                    <ul>
                        <li><NavLink className="navlink" activeClassName="active" to="welcome"><i class="fa-solid fa-house"></i> Home</NavLink></li>
                        <li><NavLink className="navlink" activeClassName="active" to="feeds"><i class="fa-solid fa-images"></i> Feeds</NavLink></li>
                        <li><NavLink className="navlink" activeClassName="active" to="people"><i class="fa-solid fa-address-book"></i> People</NavLink></li>
                        <li><NavLink className="navlink" activeClassName="active" to="createpost"><i class="fa-solid fa-upload"></i> Create Post</NavLink></li>
                        <li><NavLink className="navlink" activeClassName="active" to="profile"><i class="fa-solid fa-circle-user"></i> Profile</NavLink></li>
                        <li><NavLink className="navlink" activeClassName="active" to="setting"><i class="fa-solid fa-gear"></i> Settings</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav