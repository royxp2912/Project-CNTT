import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="nav-logo">Booking.com</span>
                <div className="nav-item">
                    <button className="navbutton">Đăng Kí</button>
                    <button className="navbutton">Đăng Nhập</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
