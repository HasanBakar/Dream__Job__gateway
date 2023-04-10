import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
    <nav className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">Dream Jobs Gateway</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2">
            <li> <NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn bg-blue-400" ><NavLink>Star Applying</NavLink></button>
        </div>
    </nav>
    );
};

export default Header;