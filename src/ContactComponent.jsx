import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactComponent() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <Container style={{ maxWidth: '600px', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type your message" required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Send Message</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default ContactComponent;
