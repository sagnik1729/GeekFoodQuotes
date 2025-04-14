import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';  // <-- your new logo file

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar__logo">
            <img src={logo} alt="GeekFoods Logo" className="navbar__logo-img" />
            GeekFoods
        </div>
        <ul className="navbar__links">
            {['Home', 'Quote', 'Restaurants', 'Foods', 'Contact'].map(link => (
                <li key={link}>
                    <a href="#" style={link === 'Quote' ? { color: '#dbab4d' } : {}}>{link}</a>
                </li>
            ))}
        </ul>
        <button className="navbar__btn">Get started</button>
    </nav>
);

export default Navbar;
