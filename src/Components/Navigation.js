import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to='/' activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to='/Produits' activeClassName="nav-active">
            Nos Produits
            </NavLink>
            <NavLink exact to='/Services' activeClassName="nav-active">
            Services
            </NavLink>
            <NavLink exact to='/About'  activeClassName="nav-active">
                A propos
            </NavLink>
            <NavLink exact to='/Contact' activeClassName="nav-active">
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;