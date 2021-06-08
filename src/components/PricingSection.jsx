import React, { Component } from 'react'
import { FaRupeeSign } from 'react-icons/fa'

export default class PricingSection extends Component {
    render() {
        return (
<section id="course" className="course">
<div className="container">

  <div className="section-title">
    <h2>Courses</h2>
    <p>Completely planned and prepared courses for you to make you perfect developers. This are some current courses and many of them are yet to come.</p>
  </div>

  <div className="row">

    <div className="col-lg-3 col-md-6">
      <div className="box">
        <h3>Front End</h3>
        <h4><sup><FaRupeeSign/></sup>1499</h4>
        <ul>
          <li>HTML/HTML 5</li>
          <li>CSS/CSS 3</li>
          <li>Bootstrap</li>
          <li className="na">JavaScript</li>
          <li className="na">Browser Dev</li>
          <li className="na">More</li>
        </ul>
        <div className="btn-wrap">
          <a href="application.html" className="btn-buy">Regester</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
      <div className="box featured">
        <h3>Full Stack</h3>
        <h4><sup><FaRupeeSign /></sup>2799</h4>
        <ul>
          <li>HTML/HTML 5</li>
          <li>CSS/CSS 3</li>
          <li>Bootstrap</li>
          <li>Java Script</li>
          <li>Browser Dev</li>
          <li className="na">other</li>
        </ul>
        <div className="btn-wrap">
          <a href="application.html" className="btn-buy">Regester</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
      <div className="box">
        <h3>Developer</h3>
        <h4><sup><FaRupeeSign /></sup>0</h4>
        <ul>
          <li>HTML/HTML 5</li>
          <li>CSS/CSS 3</li>
          <li>Bootstrap</li>
          <li>Java Script</li>
          <li>Browser Dev</li>
          <li className="na">other</li>
        </ul>
        <div className="btn-wrap">
          <a href="/#course" className="btn-buy">Soon</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
      <div className="box">
        <span className="advanced">Advanced</span>
        <h3>Ultimate</h3>
        <h4><sup><FaRupeeSign /></sup>0</h4>
        <ul>
          <li>HTML/HTML 5</li>
          <li>CSS/CSS 3</li>
          <li>Bootstrap</li>
          <li>Java Script</li>
          <li>Browser Dev</li>
          <li className="na">other</li>
        </ul>
        <div className="btn-wrap">
          <a href="/#course" className="btn-buy">Soon</a>
        </div>
      </div>
    </div>

  </div>

</div>
</section>
        )
    }
}
