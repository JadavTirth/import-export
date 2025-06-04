import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import HeroSection from './HeroSection';
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import img1 from "./image2/img1.jpeg";
import img2 from "./image2/img2.jpg";
import img3 from "./image2/img3.jpeg";
import img4 from "./image2/img4.jpg";
import img5 from "./image2/img5.jpg"
import ContactComponent from "./ContactComponent";
import { Blog } from "./data/Component";
import { Link } from "react-router-dom";

// import Products from './Products.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <div className="flex-grow-1">
        <div
          style={{
            backgroundImage: `url("/images/ariel.jpg")`,
            backgroundSize: "cover",
            height: "550px",
            color: "white",
            padding: "100px 20px",
            textAlign: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh", // full height of viewport
            width: "100%",
          }}
        >
          <Container>
            <h1>Your Global Export & Import Partner</h1>
            <p>
              Ensuring your products reach global markets swiftly and securely.
            </p>
            <Link to={"/component-2"}>
              <Button variant="primary" className="me-3">
                Read More
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button variant="outline-light">Contact Us</Button>
            </Link>
          </Container>
        </div>
      </div>
      <div className="product">
        <Container className="my-5" id="products">
          <h2 className="text-center mb-3">Products</h2>
          <p className="text-center mb-4">
            Our commitment is to ensure client satisfaction by delivering
            top-notch products at competitive prices.
          </p>
          {/* itemmmm                        ------------------------------------------------ */}
          <Row className="g-4">
            {Blog.map((item, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 text-center">
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <a
                      href={item.link}
                      
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary">View More</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* -------------------------------footer---------------------------- ------------------------------------------ */}
      <FooterComponent />
    </div>
  );
}

export default App;
