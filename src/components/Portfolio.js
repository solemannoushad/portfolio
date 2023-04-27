import React from 'react'
import p1 from '../images/p1.jpeg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.png'
import p5 from '../images/p5.jpeg'
import p6 from '../images/p6.png'

export default function Portfolio() {

    const projects = [
        {
            key: 0,
            image: p1,
            title: 'Ecommerce Website',
            description: 'Fully functional and responsive ecommerce website using php along with sql.',
            link: 'https://github.com/solemannoushad/ecommerce-website-php'
        },
        {
            key: 1,
            image: p2,
            title: 'News Web App',
            description: 'A complete news web app using React with external Api.',
            link: 'https://github.com/solemannoushad/News-App-in-react'
        },
        {
            key: 2,
            image: p3,
            title: 'Text-utilities Web App',
            description: 'A website for text utilities using MERN with complete backend.',
            link: 'https://github.com/solemannoushad/textutils-web-app'
        },
        {
            key: 3,
            image: p4,
            title: 'Portfolio Website',
            description: 'Develop a complete portfolio website for myself in React.',
            link: 'https://github.com/solemannoushad/portfolio'
        },
        {
            key: 4,
            image: p5,
            title: 'CRUD Web App',
            description: 'CRUD web app using MERN with complete backend along with user authentication.',
            link: 'https://github.com/solemannoushad/CRUD-using-MERN'
        },
        {
            key: 5,
            image: p6,
            title: 'CRUD in php',
            description: 'CRUD website using php and mySql.',
            link: 'https://github.com/solemannoushad/CRUD-in-PHP'
        },
    ]

  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
            {projects.map((item)=>{
                return <div key={item.key} className="portfolio-box">
                <img src={item.image} alt="" />
                <div className="portfolio-layer">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.link} target='_blank' rel="noreferrer"><i className='bx bxl-github'></i></a>
                </div>
            </div>
            })}

        </div>
    </section>
  )
}
