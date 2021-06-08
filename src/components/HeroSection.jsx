import React, { Component } from 'react';
import "../assets/css/hero-section.css";
export default class HeroSection extends Component {
  render() {
    return (
      <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container position-relative">
        <h1>Welcome to Learn Alwayss</h1>
        <h2>Step into your future of web designe and development. Take this courses and get good opportunities.</h2>
        <a href="#application-form" className="btn-get-started ">Get Started</a>
      </div>
    </section>
    )
  }
}
