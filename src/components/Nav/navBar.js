import React, { useState } from 'react';
import './navBar.scss';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (

        //Large screens navbar
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="/assets/Interior_Logo.svg" alt="logo" />
            </div>
            <div className="mobile__menu" onClick={toggleNav}>
                {isOpen ? (
                    <MdClose className="close" />
                ) : (<HiOutlineMenu className="open" />
                )}
            </div>
            <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>



    );
}

export default NavBar;
