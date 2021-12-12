import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-white.svg'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <a className="col-auto  logo" href='/'>
                            <img src={logo} />
                        </a>
                        <NavLink className="aqsam col-auto" to='/home'>
                            <span>
                                <i className="fas fa-bars"></i> 
                                <span>الأقسام</span>
                            </span>
                        </NavLink>
                        <NavLink className="recently me-auto col-auto" to='/home'>
                            <span>
                                <i className="fas fa-plus"></i>
                                <span>أضيف حديثا</span>
                                <i className="fas fa-user"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
