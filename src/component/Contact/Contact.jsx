import React,{useRef} from 'react'
import './Contact.css'
import{SiGmail,SiMessenger,SiWhatsapp} from 'react-icons/si'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_isfnl5u', 'template_x0tbpml', form.current, 'KCeCGT_gSNSiUyfxz')
      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail/>
            <h4>Email</h4>
            <h5>2001abhaybhardwaj@gmail.com</h5>
            <a href="mailto:2001abhaybhardwaj@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <SiMessenger/>
            <h4>Messenger</h4>
            <h5>Abhay Bhardwaj</h5>
            <a href="https://m.me/abhay.bhardwaj.7921">Send a Message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>123-456-00</h5>
            <a href="https://api.whatsapp.com/send?phone=+918077809084">Send a Message</a>
          </article>
        </div>

       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" placeholder='Your Full Name' required/>
         <input type="email" name="email" placeholder='Your Email Address' required/>
         <textarea name="message" placeholder='Your message' rows="7" required></textarea>

         <button type="submit" className='btn btn-primary'>Send</button>
       </form>

      </div>
    </section>
  )
}

export default Contact