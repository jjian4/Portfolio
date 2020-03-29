import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='container headerContainer'>
                <div className='navItem logo'>
                    <Link to='/'>JAMES JIANG</Link>
                </div>
                <nav>
                    <ul className='headerRight'>
                        <li className='navItem'>
                            <NavLink
                                exact
                                to='/experience'
                                activeClassName='navItemActive'
                            >
                                EXPERIENCE
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink
                                exact
                                to='/projects'
                                activeClassName='navItemActive'
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
