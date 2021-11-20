import './styles.css';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/userContext';
import logo from '../../assets/netflix-logo.png'
import {Button} from '../Button';
import { Dropdown } from '../Dropdown';

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
                    <Dropdown/>    
                </li>
                <li className="signin">
                    <NavLink activeClassName="nav-selected" to="/login">Sign In</NavLink>
                </li>
            </ul>
        </nav>
    );
}