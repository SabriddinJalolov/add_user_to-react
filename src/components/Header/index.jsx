import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <header className='site-header'>
            <div className='container'>
                <div className='site-header__wrapper'>
                    <NavLink className='site-header__logo' to='/'>
                        <img
                            className='site-header__logo--img'
                            src='https://via.placeholder.com/100x40'
                            width={100}
                            height={40}
                            alt='Site logo img'
                        />
                    </NavLink>

                    <nav className='sitenav'>
                        <ul className='sitenav__list'>
                            <li className='sitenav__item'>
                                <NavLink className='sitenav__link' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink className='sitenav__link' to='/about'>
                                    About Us
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink
                                    className='sitenav__link'
                                    to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink
                                    className='sitenav__link'
                                    to='/technology'>
                                    Technology
                                </NavLink>
                            </li>
                            <li className='sitenav__item'>
                                <NavLink
                                    className='sitenav__link'
                                    to='/employee'>
                                    Employee
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
