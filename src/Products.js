import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Products() {
  const productList = [
    { title: "Onion Powder", desc: "Premium quality Onion Powder for global markets.", img: "https://via.placeholder.com/100" },
    { title: "Industrial Salt", desc: "Premium quality Industrial Salt for global markets.", img: "https://via.placeholder.com/100" },
    { title: "Machine Gears", desc: "Premium quality Machine Gears for global markets.", img: "https://via.placeholder.com/100" },
    { title: "Weaving and sewing thread", desc: "Premium quality weaving and sewing thread for global markets.", img: "https://via.placeholder.com/100" },
    { title: "Rice", desc: "Premium quality rice for global markets.", img: "https://via.placeholder.com/100" }
  ];

  return (
    <Container className="my-5" id="products">
      <h2 className="text-center mb-3">Products</h2>
      <p className="text-center mb-4">
        Our commitment is to ensure client satisfaction by delivering top-notch products at competitive prices.
      </p>
      <Row className="g-4">
        {productList.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
