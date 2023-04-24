import React from 'react'

export default function Contact() {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action="">

          <div className="input-box">
            <input type="text" name="fname" id="fname" placeholder='Full Name' />
            <input type="email" name="email" id="email" placeholder='Email Address' />
          </div>

          <div className="input-box">
            <input type="number" name="number" id="number" placeholder='Mobile Number' />
            <input type="text" name="subject" id="subject" placeholder='Email Subject' />
          </div>

          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <a href='#home' className='btn'>Send Message</a>

        </form>
    </section>
  )
}
