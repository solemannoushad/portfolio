import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Loading from './Loading'

export default function Contact() {

  const [loading, setLoading] = useState(false);


  const [credentials, setCredentials] = useState({name: "" , email: "" , number: "" , subject: "", message: ""});

  const handleChange = (e)=>{
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

    const form = useRef();
    
    const sendEmail = (e) => {
      setLoading(true);
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
      emailjs.sendForm('service_2ekjow8', 'template_3h5wim4', form.current, 'nTql0oKFhwRtQW5z2')
        .then((result) => {
          
            setCredentials({name: "" , email: "" , number: "" , subject: "", message: ""});

            let notification = document.querySelector(".notificationMain");
            notification.classList.add("visible");
            setLoading(false);
            
            setTimeout(()=>{
              notification.classList.remove("visible");
            } , 2000)
            
            console.log("Successfully send");
        }, (error) => {
            console.log(error);
        });
    };

  return (
    <>
      {loading && <Loading/>}
      <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me!</span></h2>

          <form ref={form} onSubmit={sendEmail}>

            <div className="input-box">
              <input value={credentials.name} onChange={handleChange} type="text" name="name" id="name" placeholder='Full Name' required tabIndex={1} />
              <input value={credentials.email} onChange={handleChange} type="email" name="email" id="email" placeholder='Email Address' required tabIndex={2} />
            </div>

            <div className="input-box">
              <input value={credentials.number} onChange={handleChange} type="number" name="number" id="number" placeholder='Mobile Number' tabIndex={3} />
              <input value={credentials.subject} onChange={handleChange} type="text" name="subject" id="subject" placeholder='Email Subject' tabIndex={4} />
            </div>

            <textarea value={credentials.message} onChange={handleChange} name="message" id="" cols="30" rows="10" placeholder='Your Message' required tabIndex={5}></textarea>
            <input className='btn' type="submit" value="Send Message" tabIndex={6} />

          </form>
      </section>
    </>
  )
}
