import React, { Component } from 'react';
import {FaPencilAlt, FaAddressBook, FaHandsHelping, FaSlidersH, FaTablets, FaRProject} from 'react-icons/fa';

export default class ServiceSection extends Component {
    render() {
        return (
            <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>We will be provideing notes as well as premium content so that you will be able to make your projects as attractive as possible.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <FaPencilAlt size={30} fill="red"  />
              </div>
              <h4><a href="/">Lacture Notes</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <FaAddressBook size={30} fill="red"  /> 
              </div>
              <h4><a href="/">Required Softwares</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <FaHandsHelping size={30} fill="red"  />
              </div>
              <h4><a href="/">Basic Support</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <FaSlidersH size={30} fill="red"  />
              </div>
              <h4><a href="/">Presentations</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-red">
              <div className="icon">
                <FaTablets size={30} fill="red"  />
              </div>
              <h4><a href="/">Assignments</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-teal">
              <div className="icon">
                <FaRProject size={30} fill="red"  />
              </div>
              <h4><a href="/">Project Support</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        )
    }
}
