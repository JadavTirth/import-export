import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../image2/img1.jpeg';
function Component1() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left side: Image */}
        <Col md={6} className="text-center">
          <Image
            src={img1}
            alt="Profile"
            fluid
            rounded
          />
        </Col>

        {/* Right side: Summary text */}
        <Col md={6}>
          <h2>About Our Product</h2>
          <p>
            asdfghur premium quality product is designed to meet international
            standards. Carefully processed and packaged to maintain freshness,
            it's trusted by clients worldwide for its reliability and
            consistency. Whether you're sourcing for retail or industrial use,
            we deliver quality you can count on.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Component1;
