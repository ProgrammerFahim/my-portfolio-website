import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <NavLink 
                    to="/" 
                    activeClassName="navlink_a"
                    className="navlink" 
                    exact >Home</NavLink>
                <NavLink 
                    to="/blog" 
                    activeClassName="navlink_a"
                    className="navlink" 
                    >Blog</NavLink>
                <NavLink 
                    to="/programming" 
                    activeClassName="navlink_a"
                    className="navlink" 
                    >Programming</NavLink>
                <NavLink 
                    to="/about" 
                    activeClassName="navlink_a"
                    className="navlink" 
                    >About</NavLink>
            </nav>
        </div>
    );
};

export default navbar;