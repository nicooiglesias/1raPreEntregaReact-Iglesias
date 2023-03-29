import CartWidget from "../CartWidget/CartWidget"
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <h3 className="Titulo">Rage</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar