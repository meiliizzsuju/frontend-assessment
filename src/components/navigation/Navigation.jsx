import React, { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const HamburgerClick = () => {
        setIsActive(!isActive);
      };

    return (
        <div className='navBurger'>
            <button className="navBurger__hamburger" id="icon" onClick={HamburgerClick}>
                <div className={`navBurger__hamburger--icon icon-1 ${isActive ? 'a' : ''}`} id="a" ></div>
                <div className={`navBurger__hamburger--icon icon-2 ${isActive ? 'c' : ''}`} id="b"></div>
                <div className={`navBurger__hamburger--icon icon-3 ${isActive ? 'b' : ''}`} id="c"></div>
                <div className="navBurger__hamburger--clear"></div>
            </button>

            <nav id="navBurger__nav" className={`navBurger__nav ${isActive ? 'show' : ''}`}>
                <ul>
                    <li><a href="/">Exercise 1</a></li>
                    <li><a href="/exercise2">Exercise 2</a></li>
                </ul>
                <span className='absolute bottom-4 left-1/2 -translate-x-1/2'>Thank you for visiting!
                Ticha Tin :)</span>
            </nav>

        </div>
    )
}

export default Navigation