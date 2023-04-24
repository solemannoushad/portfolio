import React from 'react'
import logo from '../home.png'

export default function About() {
  return (
    <section className="about" id="about">
        <div className="about-image">
            <img src={logo} alt="" />
        </div>
        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Full Stack Developer!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad hic dicta praesentium saepe necessitatibus? Corporis dicta laboriosam voluptas tenetur nulla aliquid tempora sit perspiciatis recusandae. Non eligendi ipsam omnis?</p>
            <a href="#contact" className="btn">Contact Me</a>
        </div>
    </section>
  )
}
