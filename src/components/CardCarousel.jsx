import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aditi from "../assets/images/profile/Aditi.jpg"
function CardCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

    
 
    return (
      <div className="container pt-5">
        <Slider {...settings}>
        <figure className="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div className="author">
    <img src={Aditi} alt="sq-sample1"/>
    <h5>Aditi Deshmukh<span> TCS</span></h5>
  </div>
</figure>
<figure className="snip1192 hover">
  <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
    <h5>Max Conversion<span> LittleSnippets</span></h5>
  </div>
</figure>
<figure className="snip1192">
  <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.</blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
    <h5>Eleanor Faint<span> LittleSnippets</span></h5>
  </div>
</figure>
<figure className="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>
<figure className="snip1192 hover">
  <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
    <h5>Max Conversion<span> LittleSnippets</span></h5>
  </div>
</figure>
<figure className="snip1192">
  <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.</blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
    <h5>Eleanor Faint<span> LittleSnippets</span></h5>
  </div>
</figure>
        </Slider>
      </div>
    );
  }


export default CardCarousel;
