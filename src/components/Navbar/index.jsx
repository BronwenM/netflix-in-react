import './styles.css';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/userContext';
import logo from '../../assets/netflix-logo.png'

export const Navbar = () => {
    
    const globalContext = useContext(UserContext);
    const loggedIn = false;

    return (
        <nav className="navbar">
            <NavLink exact={true} activeClassName="nav-selected" to="/">
                <img src={logo} className="logo"/>
            </NavLink>
            <ul className="navbar-links">
                <li>
                    <NavLink activeClassName="nav-selected" to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/movies">Movies</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/watchlist">My Watch List</NavLink>
                </li>
            </ul>
        </nav>
    );
}