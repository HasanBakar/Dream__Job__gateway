import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    
    return (
    <nav className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">Dream Jobs Gateway</a>
        </div>
        <label className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-vertical md:menu-horizontal px-2">
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