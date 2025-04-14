
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { FaBowlFood } from "react-icons/fa6";
const Footer = () => (
    <footer className="footer">
        <div className="footer__top">
            <div className="footer__logo"><FaBowlFood /> logoipsum</div>
            <p>
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
            </p>
            <div className="footer__links">
                {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((link) => (
                    <a key={link} href="#">
                        {link}
                    </a>
                ))}
            </div>
        </div>
        <div className="footer__social">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaDribbble />
        </div>
    </footer>
);

export default Footer;