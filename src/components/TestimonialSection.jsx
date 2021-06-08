import React, { Component } from 'react';
import CardCarousel from './CardCarousel';

export default class TestimonialSection extends Component {
    render() {
        return (
            <section id="testimonials" className="testimonials">
            <div className="container">
      
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>What do proffessionals from various reputed companies say abou us is desplayied below, have a look and make a choice accordingly .</p>
              </div>
      
             <CardCarousel />
        </div>
    </section>
        )
    }
}
