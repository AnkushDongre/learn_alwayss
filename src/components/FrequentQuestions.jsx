import React, { Component } from 'react';
import {Accordion, Card} from  "react-bootstrap";
import "../assets/css/frequently.css";

export default class FrequentQuestions extends Component {
    render() {
        return (
            <section id="faq" className="faq section-bg">
            <div className="container">
      
              <div className="section-title">
                <h2>Frequently Asked Questions</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
      
              <Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <p>What are the prerequisite for the basic courses?</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>There are no prerequisite fro the basic courses like HTML, CSS and JS. You will betaought each an every concept form scratch.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <p>Will there be an requirement of laptop/PC to commence this course?</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>It is well and good if you have the above requirements. But don't worry if you don't. We will provide various platforms for you to try and practice the codes. A android phone will be OK.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <p>What will be the course duration?</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Mostly the course duration is 45 days(mostly saturdy and sundays) and may vary according to the learning speed of students.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <p>What will be the formet of notes provided?</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Mostly all the notes will be in PDF and PPT. But the other requirements will be as per adviced.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      
            </div>
          </section>
        )
    }
}
