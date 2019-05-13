import React from 'react'
import {NavLink} from 'react-router-dom'; 

const NavBar = () => {
    return (
        <div className="menuBar">
            <ul>
                <li><NavLink to='/'>home</NavLink></li>
                <li><NavLink to='/about'>about</NavLink></li>
                <li><NavLink to='/contact'>contact</NavLink></li>
            </ul>
        </div>
    )
}


export default NavBar
    