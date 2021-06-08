import React, { Component } from 'react';
import {FaChevronRight} from "react-icons/fa";
import AboutImage from  "../assets/images/about_page_image.jpg";
import "../assets/css/about.css";
export default class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="about">
      <div className="container">
      <div className="section-title">
          <h2>About</h2>
          </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={AboutImage} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Join us for a precised and personalised learning.</h3>
            <p>
              Many students are wondering for the job and placement of there deram, H?ere we are to make your dream come true. Just saddle your horses and reach your goles by joining us.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h4><FaChevronRight className="bx bx-chevron-right" fill="orange" /> Precise Teaching</h4>
                <p>You will learn form scratch and no prioer knowledge is required to start this courses. We will provide you with a precised material so that you can have notes of each chapter.</p>
              </div>
              <div className="col-md-6">
                <i className="bx bx-cube-alt"></i>
                <h4><FaChevronRight className="bx bx-chevron-right" fill="orange" /> Personalised Teaching</h4>
                <p>Each student will be guided if any problems occure. The help will be on call or technical support for the trainng during lactures.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
  }
}
