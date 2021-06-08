import React, { Component } from 'react'
import { FaChevronRight, FaTwitter, FaFacebook, FaInstagram, FaGooglePlus, FaLinkedin } from "react-icons/fa";
export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">

            <div className="footer-top">
              <div className="container">
                <div className="row">
        
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Learn Alwayss</h3>
                    <p>
                      Near Chatrapati Shivaji<br/>
                      Maharaj Complex, Akola,<br/>
                      Maharashtra 444104. <br/><br/>
                      <strong>Phone:</strong> +91 99238 52939<br/>
                      <strong>Email:</strong> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9af3f4fcf5daffe2fbf7eaf6ffb4f9f5f7">[email&#160;protected]</a><br/>
                    </p>
                  </div>
        
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Home</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">About us</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Services</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Terms of service</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Privacy policy</a></li>
                    </ul>
                  </div>
        
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Web Design</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Web Development</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Product Management</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Marketing</a></li>
                      <li><FaChevronRight className="bx bx-chevron-right" /> <a href="/">Graphic Design</a></li>
                    </ul>
                  </div>
        
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p>For updates on new courses and latest news subscribe our newsletter.</p>
                    <form action="" method="post">
                      <input type="email" name="email" disabled /><input type="submit" value="Subscribe" disabled />
                    </form>
                  </div>
        
                </div>
              </div>
            </div>
        
            <div className="container d-md-flex py-4">
        
              <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                  &copy; Copyright <strong><span>Learn Alwayss</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                 &#9798; Designed by <a href="/">Ankush Dongre</a>
                </div>
              </div>
              <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="/" className="twitter"><FaTwitter className="bx bxl-twitter" /></a>
                <a href="/" className="facebook"><FaFacebook className="bx bxl-facebook" /></a>
                <a href="/" className="instagram"><FaInstagram className="bx bxl-instagram" /></a>
                <a href="/" className="google-plus"><FaGooglePlus className="bx bxl-skype" /></a>
                <a href="/" className="linkedin"><FaLinkedin className="bx bxl-linkedin" /></a>
              </div>
            </div>
          </footer>
        )
    }
}
