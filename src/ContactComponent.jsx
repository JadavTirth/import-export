import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Prevent default submission
    event.preventDefault();

    // If form is valid → show success action
    if (form.checkValidity()) {
      // You can add submit logic here (e.g., API call)
      alert("Form submitted successfully!");

      // Optionally reset form
      form.reset();
      setValidated(false);
    } else {
      // If invalid → prevent submission and show validation
      event.stopPropagation();
      setValidated(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <Container
        style={{
          maxWidth: '600px',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <h2 className="text-center mb-4">Contact Us</h2>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Name */}
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
          </Form.Group>

          {/* Company Name */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="name" placeholder="Company Name" />
      </Form.Group>

          {/* Contact Number */}
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="mobile-number" placeholder="number" />
      </Form.Group>

          
          

          {/* Message */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

          {/* Submit Button */}
          <div className="text-center">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default ContactComponent;
