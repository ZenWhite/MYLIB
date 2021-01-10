import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="wrap flex">
                <div className="logo">
                    <img src="icons/logo.svg" className="logo" alt="logo" draggable="false" />
                </div>
                <nav className="flex header__nav">
                    <NavLink to="/" exact>Поиск</NavLink>
                    <NavLink to="/library">Моя библиотека</NavLink>
                </nav>
                <ul className="header__block flex">
                    <li>
                        <a href="https://vk.com/andrew_letyuchiy" rel="noreferrer" target="_blank" className="header__link flex">
                            <img src="icons/vk.svg" alt="vk" draggable="false"/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;