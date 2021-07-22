import React from 'react'
import "./Header.css"
import India from "./img/India.png"
function Header() {
    return (
        <div className="header">
            <img className="header_image" src={India} alt="" />
            <p className="headerr">Covid Tracker</p>
        </div>
    )
}

export default Header
