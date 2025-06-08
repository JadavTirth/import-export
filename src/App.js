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
import img5 from "./image2/img5.jpg";
import ContactComponent from "./ContactComponent";
import { Blog } from "./data/Component";
import { Link } from "react-router-dom";
import FullScreenCarousel from "./Slide";
import Slide from "./Slide";
import Content from "./Content";


// import Products from './Products.js';

function App() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Slide />
      <Content />

      <div className="product shadow-lg">
        <Container className="my-5" id="products">
          <div>
            <Container m={5} className="shadow-lg p-5">
              <h2>ABOUT OUR PRODUCT</h2>
              <p>
                Our premium quality product is designed to meet international
                standards. Carefully processed and packaged to maintain
                freshness, it's trusted by clients worldwide for its reliability
                and consistency. Whether you're sourcing for retail or
                industrial use, we deliver quality you can count on.
              </p>
            </Container>
          </div>
          {/* itemmmm                        ------------------------------------------------ */}
          <div className="d-flex overflow-auto gap-4 pb-4">
            {Blog.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: "250px" }}
              >
                <Card className="h-100 text-center">
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <Link to={item.link} rel="noopener noreferrer">
                      <Button variant="primary">View More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
        <div id="contect">

        <ContactComponent />
        </div>
      </div>
      {/* -------------------------------footer---------------------------- ------------------------------------------ */}
      <div >
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
