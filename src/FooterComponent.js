import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3 mb-md-0">
            <h5>MyCompany</h5>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={4} sm={6} className="mb-3 mb-sm-0">
            
          </Col>
          <Col md={4} sm={6}>
            <h6>Connect</h6>
            <p>Email: info@mycompany.com</p>
            <p>Phone: +91-12345-67890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
