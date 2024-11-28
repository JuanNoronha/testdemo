import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar'
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar title="contact" />
      <div style={{marginTop: "40px"}}>
        <div id="left-column">
          <h1 className="contact-title">Please Contact Us</h1>
          <form className="input-container">
            <div className="form-group"><label>Name</label><input type="text" name="name" id="name"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Email Address</label><input type="email" name="email" id="email"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Enter your Message</label><input type="text" name="message"
              id="mmessage" className="form-control" required="" /></div>
            <button type="submit" className="contact-send-btn">
              Send Message
            </button>
          </form>

          <div>
            <div className="social_links">
              <a href="#" aria-label="LinkedIn"
                target="_blank" className="main_social_links">
                <img className="link_images" src="images/linkedin.png" />
              </a>
              <a href="#" aria-label="Github" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/github.png" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/instagram.png" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/twitter.webp" />
              </a>
            </div>
          </div>
        </div>

        <div id="contact-right">
          <img className="contact-img" src="images/contactus.jpg" />
        </div>

      </div>
    </div>

  )
}

export default Contact

