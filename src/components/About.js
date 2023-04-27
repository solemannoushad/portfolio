import React from 'react'
import logo from '../images/about.jpg'

export default function About() {
  return (
    <section className="about" id="about">
        <div className="about-image">
            <img src={logo} alt="" />
        </div>
        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Full Stack Developer!</h3>
            <p>Full Stack React developer with experience of more than 2 years. I've spent lot of time in creating fully functional and responsive web / mobile apps using react. I've experience in MERN stack for full stack website development and react native with firebase for full stack andriod / ios application developer.</p>
            <a href="https://www.upwork.com/freelancers/~014f644e7f19ddf74e" target='_blank' rel='noreferrer' className="btn">Hire Me</a>
        </div>
    </section>
  )
}
