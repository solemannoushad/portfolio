import React from 'react'
import logo from '../images/home.jpg'
import cv from '../CV.pdf'
import ReactTypingEffect from 'react-typing-effect';



export default function Home() {
  return (
    
    <section className="home" id="home">
        <div className="left-home">
            <h3>Hello, It's Me</h3>
            <h1>Soleman Noushad</h1>
            <h3>And I'm a <span>
                <ReactTypingEffect
                speed={100}
                eraseSpeed={100}
                eraseDelay={2000}
                typingDelay={100}
                text={["Website Developer.", "Application Developer." , "Freelancer."]}
                />
            </span>
            </h3>
            <p>Full stack website mobile application developer with experience of more than 2 years. Completed several projects using php / mySql and MERN stack.</p>
            <div className="social-media">
                <a href="https://www.facebook.com/Sulemannoushad" target="_blank" rel="noreferrer" className="social-media-icon"><i className='bx bxl-facebook'></i></a>
                <a href="https://www.linkedin.com/in/soleman-noushad-86bb39207/" target="_blank" rel="noreferrer" className="social-media-icon"><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/solemannoushad" target="_blank" rel="noreferrer" className="social-media-icon"><i className='bx bxl-github'></i></a>
                <a href="https://www.upwork.com/freelancers/~014f644e7f19ddf74e" target="_blank" rel="noreferrer" className="social-media-icon"><i className='bx bxl-upwork' ></i></a>
            </div>
            <a href={cv} className="btn" download="CV">Download CV</a>
        </div>
        <div className="right-home">
            <div className="img"><img src={logo} className='img' alt="" /></div>
        </div>
    </section>
  )
}
