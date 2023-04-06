import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Header() {

    const location = useLocation()

    return (
    <header>
        <NavLink className="site-logo" to="/" isActive={() => location.pathname === '/'}>#VanLife</NavLink>
        <nav>
            <NavLink to="/about" isActive={() => location.pathname === '/about'}>About</NavLink>
            <NavLink to="/vans" isActive={() => location.pathname === '/vans'}>Vans</NavLink>
            <NavLink to="/host">Host</NavLink>
        </nav>
    </header>
    )
}