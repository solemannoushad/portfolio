import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [scroll, setScroll] = useState(0);
  
  let navbar = document.querySelector('nav');


  return (
    <nav className="navbar">
        <div className="logo">
            Portfolio.
        </div>
        <ul className="menu">
            <li className="menu-list"><a href="#home" className="menu-a active">Home</a></li>
            <li className="menu-list"><a href="#about" className="menu-a">About</a></li>
            <li className="menu-list"><a href="#services" className="menu-a">Services</a></li>
            <li className="menu-list"><a href="#portfolio" className="menu-a">Portfolio</a></li>
            <li className="menu-list"><a href="#contact" className="menu-a">Contact</a></li>
        </ul>
        <div className="menu-icon">
          <box-icon color="white" size="3.5rem" name='menu-alt-right'></box-icon>
        </div>
    </nav>
  )
}
