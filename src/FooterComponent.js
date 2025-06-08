import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const FooterComponent = () => {
  return (
    <div style={{ backgroundColor: '#1A237E', color: 'white', padding: '2rem 0' }}>
      <Container>
        <h5 className="mb-4">Location Info</h5>
        <Row className="mb-4">
          <Col md={6} className="d-flex mb-3">
            <HouseFill size={30} className="me-3 mt-1" />
            <div>
              <strong>MAIN OFFICE:</strong><br />
             95-Hariramnagar-2, Subhashnagar, Bhavnagar 364001
            </div>
          </Col>
          
        </Row>

        <h5 className="mb-4">Contact Info</h5>
        <Row>
          <Col md={6} className="d-flex mb-3">
            <EnvelopeFill size={25} className="me-3 mt-1" />
            <div>
              <strong>EMAIL:</strong><br />
             Argoimex@gmail.com
            </div>
          </Col>
          <Col md={6} className="d-flex mb-3">
            <TelephoneFill size={25} className="me-3 mt-1" />
            <div>
              <strong>PHONE:</strong><br />
              +91 9662414204<br />
              +91 6359196943
            </div>
          </Col>
        </Row>

        

        <p className="text-center mt-4 mb-0 small">© All Rights Reserved by JEVI</p>
      </Container>
    </div>
  );
};

export default FooterComponent;


