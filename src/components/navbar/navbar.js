import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import ScrollLink from "./scrollLink";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="https://github.com/kipgorey">Github</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>

                <ScrollLink/>
            </ul>
        </nav>
    );
}

export default Navbar;