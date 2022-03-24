import React from 'react'
import  './Navbar.css'
import logo from '../../Assets/images/logo01.png'

const Navbar = () => {
  return (
    <div>
        <div className="flex nav-container">
        <div className="logo-container">
            <a href="">
                <img src={logo} alt="" className="wh-logo" />
            </a>
        </div>
        <div className="flex nav-menu">
            <div className="nav-item">
                <a href="" className="list-item"> Home </a>
            </div>
            <div className="nav-item">
                <a href="" className="list-item"> Activities </a>
            </div>
            <div className="nav-item">
                <a href="" className="list-item"> Notification </a>
            </div>
            {/* Dropdown */}
            <div className="nav-item dropdown">
                <div className="flex">
                    <button className="dropbtn">
                        Profile
                        <i className="fa fa-caret-down"></i>
                    </button>
                </div>
                <div className="dropdown-content">
                    <a href="#">
                        <div className="flex">
                            <i className="fa fa-caret-down icon-dd"></i>
                            <p className="flex text-dd">User name</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex">
                            <i className="fa fa-caret-down icon-dd"></i>
                            <p>Notification</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex">
                            <i className="fa fa-caret-down icon-dd"></i>
                            <p>Privacy and Security</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="flex">
                            <i className="fa fa-caret-down icon-dd"></i>
                            <p>Setting</p>
                        </div>
                    </a>
                    <div className="flex logout-container">
                        <button className="flex">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar