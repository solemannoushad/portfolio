import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);

  useEffect(() => {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky' , scrollY > 100);
  } , [scrollY])

  useEffect(() => {

    let menu = document.querySelector('.menu');
    let menuIcon = document.querySelector('#menuIcon');
  
    menuIcon.onclick = ()=>{
      menuIcon.classList.toggle('bx-x');
      menu.classList.toggle('active1');
    }
    
    menuIcon.classList.remove('bx-x');
    menu.classList.remove('active1');
 } , [])


 useEffect(()=>{
   let menu = document.querySelector('.menu');
   let menuIcon = document.querySelector('#menuIcon');
   menuIcon.classList.remove('bx-x');
   menu.classList.remove('active1');
 })



  return (
    <nav className="navbar">
        <div className="logo">
            Portfolio<span>.</span>
        </div>
        <ul className="menu">
            <li className="menu-list"><a href="#home" className="menu-a active">Home</a></li>
            <li className="menu-list"><a href="#about" className="menu-a">About</a></li>
            <li className="menu-list"><a href="#services" className="menu-a">Services</a></li>
            <li className="menu-list"><a href="#portfolio" className="menu-a">Portfolio</a></li>
            <li className="menu-list"><a href="#contact" className="menu-a">Contact</a></li>
        </ul>
        <div className="menu-icon">
          <i class='bx bx-menu-alt-right' id='menuIcon'></i>
        </div>
    </nav>
  )
}
