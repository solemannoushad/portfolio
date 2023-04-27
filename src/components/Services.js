import React from 'react'

export default function Services() {

    const services = [
        {
            key: 0,
            title: "Web Development",
            description: "I'm a full stack website developer with experience of more than 2 years. Much grip on MERN stack and creared many projects using MERN.",
            icon: "bx bx-code-alt"
        },
        {
            key: 1,
            title: "App Development",
            description: "I'm a full stack andriod / ios mobile application developer in React Native. Also completed fully function ecommerce app using react native.",
            icon: "bx bxl-codepen"
        },
        {
            key: 2,
            title: "WordPress Developer",
            description: "I'm a wordPress website developer and can create fully functional and responsive wordPress websites according to client's requirement.",
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
                <a className='btn' href="https://www.upwork.com/freelancers/~014f644e7f19ddf74e" target='_blank' rel='noreferrer'>Read More</a>
            </div>
            })}
            
        </div>
    </section>
  )
}
