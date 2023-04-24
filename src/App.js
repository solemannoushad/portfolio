import './poppins/poppins.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'

function App() {

  useEffect(() => {

    ScrollReveal({
      // reset: true,
      distance: '80px',
      duration: 1500,
      delay: 150 
     });
  
    ScrollReveal().reveal('.heading, .left-home' , {origin: 'top'});
    ScrollReveal().reveal('.services-container, .right-home, .portfolio-box , .contact form', {origin: 'bottom'});
    ScrollReveal().reveal('.left-home h1 , .about-image', {origin: 'left'});
    ScrollReveal().reveal('.left-home p , .about-content', {origin: 'right'});
  } , [])



  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
  
    console.log(navLinks);
  
    window.onscroll = ()=>{
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
          })
        }
      })
    }

  } , [])
  

  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
