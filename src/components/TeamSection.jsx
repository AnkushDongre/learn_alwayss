import React, { Component } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default class TeamSection extends Component {
    render() {
        return (
            <section id="team" className="team section-bg">
<div className="container">

  <div className="section-title">
    <h2>Team</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className="row">

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
        <img src="https://avatars.githubusercontent.com/u/55850288?v=4" width="300" alt="Vishwajeet"/>

          <div className="social">
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaLinkedin /></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaFacebook /></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Mr. Vishwajeet</h4>
          <span>Web Developer</span>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
        <img src="https://avatars.githubusercontent.com/u/72456933?v=4" width="300" alt="Ankush"/>

        <div className="social">
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaLinkedin /></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaFacebook /></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Mr. Ankush</h4>
          <span>Front-end Engineer</span>
        </div>
      </div>
    </div>


  </div>

</div>
</section>
        )
    }
}
