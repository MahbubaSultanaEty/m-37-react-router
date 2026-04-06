import React from 'react';
import { Link, NavLink } from 'react-router';
import "./header.css"

const Header = () => {
    return (
        <div>
            <h2>THis is header</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/headphones">Headphones</NavLink>
            </nav>
        </div>
    );
};

export default Header;