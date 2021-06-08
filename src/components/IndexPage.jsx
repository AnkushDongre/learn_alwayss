import React, { Component } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
// import ClientSection from "./ClientSection";
import AboutSection from "./AboutSection";
// import CountsSection from "./CountsSection";
import ServiceSection from "./ServiceSection";
import CallToAction from "./CallToAction";
import TestimonialSection from "./TestimonialSection";
// import PortfolioSection from "./PortfolioSection";
import TeamSection from "./TeamSection";
import PricingSection from "./PricingSection";
import FrequentQuestions from './FrequentQuestions';
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ApplicationForm from "./ApplicationFrom";

import "../assets/css/style.css";

export default class IndexPage extends Component {
    render() {
        return (
           <>
    <Header />
    <HeroSection />

    {/* <ClientSection/> */}

    <AboutSection />

    {/* <CountsSection /> */}

    <ServiceSection />

    <CallToAction />

    <TestimonialSection />
    
    {/* <PortfolioSection /> */}

    <TeamSection />

    <PricingSection />
    
    <ApplicationForm />

    <FrequentQuestions />

    <ContactSection />

    <Footer />
</>
        )
    }
}
