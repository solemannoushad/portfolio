import React from 'react'

export default function Services() {

    const services = [
        {
            key: 0,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam ex fugiat eius tempora vero perspiciatis consequuntur veritatis quibusdam facilis.",
            icon: "bx bx-code-alt"
        },
        {
            key: 1,
            title: "App Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam ex fugiat eius tempora vero perspiciatis consequuntur veritatis quibusdam facilis.",
            icon: "bx bxl-codepen"
        },
        {
            key: 2,
            title: "WordPress",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam ex fugiat eius tempora vero perspiciatis consequuntur veritatis quibusdam facilis.",
            icon: "bx bx-pie-chart-alt-2"
        },
    ]

  return (
    <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-container">
            {services.map((item)=>{
                return <div key={item.key} className="services-box">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className='btn' href="#readmore">Read More</a>
            </div>
            })}
            
        </div>
    </section>
  )
}
