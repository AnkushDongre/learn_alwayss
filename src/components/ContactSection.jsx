import React, { Component } from 'react';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export default class ContactSection extends Component {
    render() {
        return (
            <section id="contact" className="contact">
            <div className="container">
      
              <div className="section-title">
                <h2>Contact</h2>
                <p>If you have any questions which are not mentioned above can be asked through this platform. We will reach out to you as soon as possible. Please call us only if there is a urgency.</p>
              </div>
      
              <div className="row">
      
                <div className="col-lg-6">
      
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <BiMap size={30} fill="red" />
                        <h3>Our Address</h3>
                        <p>Near Chatrapati Shivaji Maharaj Complex, Akola,<br/>
                      Maharashtra 444104.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <AiOutlineMail size={30} fill="red" />
                        <h3>Email Us</h3>
                        <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cba2a5ada48baeb3aaa6bba7aee5a8a4a6">[email&#160;protected]</a><br/><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="563539382237352216332e373b263a337835393b">[email&#160;protected]</a></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <BiPhoneCall size={30} fill="red" />
                        <h3>Call Us</h3>
                        <p><b>(Urgent calls only)</b></p>
                        <p>+91 99238 52939<br/>+91 98509 39148</p>
                      </div>
                    </div>
                  </div>
      
                </div>
      
                <div className="col-lg-6">
                  <form className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
}
