import React from 'react'
import logo from '../home.png'
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
                typingDelay={2000}
                text={["Website Developer.", "Application Developer." , "Freelancer."]}
                />
            </span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex illum eos earum soluta, aut fugit cupiditate.</p>
            <div className="social-media">
                <a href="https://www.facebook.com/Sulemannoushad" className="social-media-icon"><i className='bx bxl-facebook'></i></a>
                <a href="https://www.linkedin.com/in/soleman-noushad-86bb39207/" className="social-media-icon"><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/solemannoushad" className="social-media-icon"><i className='bx bxl-github'></i></a>
                <a href="https://www.upwork.com/freelancers/~014f644e7f19ddf74e" className="social-media-icon"><i className='bx bxl-upwork' ></i></a>
            </div>
            <a href='../CV.pdf' className="btn" download>Download CV</a>
        </div>
        <div className="right-home">
            <div className="img"><img src={logo} className='img' alt="" /></div>
        </div>
    </section>
  )
}
