import React from 'react'
import logo from '../p1.jpg'
import logo1 from '../home.png'

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={logo} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, beatae.</p>
                    <a href="#contact"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}
