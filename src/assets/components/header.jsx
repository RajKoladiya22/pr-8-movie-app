import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (menuItem) => {
        setActiveItem(menuItem === activeItem ? '' : menuItem);
    };

    return (
        <div className="contain">
            <nav className="side-nav">
                <ul className="nav-menu">
                    <li className={`nav-item ${activeItem === 'Dashboard' ? 'active' : ''}`}>
                        <NavLink to="/" onClick={() => handleItemClick('Dashboard')}>
                            <span className="menu-text">Home</span>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${activeItem === 'Users' ? 'active' : ''}`}>
                        <NavLink to="/trending" onClick={() => handleItemClick('Users')}>
                            <span className="menu-text">Trending</span>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${activeItem === 'Posts' ? 'active' : ''}`}>
                        <NavLink to="/upcoming" onClick={() => handleItemClick('Posts')}>
                            <span className="menu-text">Upcoming</span>
                        </NavLink>
                    </li>
                    <li className={`nav-item ${activeItem === 'Media' ? 'active' : ''}`}>
                        <NavLink to="/favorites" onClick={() => handleItemClick('Media')}>
                            <span className="menu-text">Favorites</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
