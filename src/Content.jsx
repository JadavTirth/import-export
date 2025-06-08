import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Content.css"; // optional if you want extra styles

const Content = () => {
  return (
    <Container fluid className="py-5 px-3 d-flex justify-content-center align-items-center vh-100 custom-box" id="content">
      <Row className="w-100 justify-content-center">
        <Col  className="custom-width">
          <Card className="w-100 border-0 p-4 rounded-4 text-center bg-light">
            <Card.Body>
              <Card.Title as="h2" className="mb-4 ">
                ABOUT ARGOIMEX
              </Card.Title>
              <Card.Text>
                <p>
                  At Argoimex, we are driven by a mission to take the richness
                  of India’s heritage and quality offerings to the world. Based
                  in Gujarat, India, we specialize in the export of carefully
                  selected goods that reflect our commitment to excellence.
                </p>
                <p>
                  Our commitment is rooted in quality, reliability, and
                  transparency. By working directly with trusted producers and
                  adhering to international standards, we ensure that every
                  shipment meets the expectations of global buyers. Whether
                  you're an importer, wholesaler, or private label brand, we
                  deliver value with every container.
                </p>
                <p>
                  With a customer-first approach and growing global presence,
                  Argoimex is not just a supplier—but your long-term export
                  partner committed to building sustainable trade relationships.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
