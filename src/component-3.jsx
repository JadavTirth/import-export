import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "./image2/img3.jpeg";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

function Component3() {
  return (
    <div>

    
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left side: Image */}
        <Col md={6} className="text-center">
          <Image
            src={img3}
            alt="Profile"
            fluid
            rounded
            style={{ maxWidth: "500px", height: "500px" }}
          />
        </Col>

        {/* Right side: Summary text */}
        <Col md={6} className="shadow-lg p-5">
          <h2>About Our Product</h2>
          <p>
            Our premium quality product is designed to meet international
            standards. Carefully processed and packaged to maintain freshness,
            it's trusted by clients worldwide for its reliability and
            consistency. Whether you're sourcing for retail or industrial use,
            we deliver quality you can count on.
          </p>
        </Col>
      </Row>
    </Container>
      <ContactComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Component3;
