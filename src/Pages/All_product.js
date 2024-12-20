import { Container, Row, Col, Card } from "react-bootstrap";

//images import
import iphone15 from "../Assets/Images/iphone15.jpeg";
import iphone16 from "../Assets/Images/iphone16.jpeg";
import Motorola from "../Assets/Images/Motorola.jpeg";
import vivo from "../Assets/Images/vivo.jpeg";

// import image
import speaker5 from "../Assets/Images/speaker5.jpeg";
import speaker6 from "../Assets/Images/speaker6.jpeg";
import speaker7 from "../Assets/Images/speaker7.jpeg";
import speaker8 from "../Assets/Images/speaker8.jpeg";

// import image
import headphone5 from "../Assets/Images/headphone5.jpeg";
import headphone6 from "../Assets/Images/headphone6.jpeg";
import headphone7 from "../Assets/Images/headphone7.jpeg";
import headphone4 from "../Assets/Images/headphone4.jpeg";

import Laptop9 from "../Assets/Images/laptop9.jpeg";
import Laptop10 from "../Assets/Images/laptop10.jpeg";
import Laptop11 from "../Assets/Images/laptop11.jpeg";
import Laptop12 from "../Assets/Images/laptop12.jpeg";

function AllProducts() {
  return (
    <Container className="all-products">
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={iphone15} />
                </div>
                <Card.Body>
                  <h4>Apple Iphone 15 (Black, 128GB)</h4>
                  <p>
                    ₹ 58,999 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.8<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={iphone16} />
                </div>
                <Card.Body>
                  <h4>Apple Iphone 16 (Teal, 128GB)</h4>
                  <p>
                    ₹ 79,900 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.9<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={Motorola} />
                </div>
                <Card.Body>
                  <h4>Motorola g45 5G (Magenta, 128 GB)</h4>
                  <p>
                    ₹ 12,999 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.8<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={vivo} />
                </div>
                <Card.Body>
                  <h4>vivo T3 5G (Crystal, 128 GB)</h4>
                  <p>
                    ₹ 18,499 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.8<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12}>
          <Row className="phonerow">
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={speaker5} />
                </div>
                <Card.Body>
                  <h4>
                    CREATIVE SBS E2900 120 W Bluetooth Laptop/Desktop Speak..
                  </h4>
                  <p>
                    ₹ 4,499 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.0<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={speaker6} />
                </div>
                <Card.Body>
                  <h4>
                    RZG Dj Sound Music System Home theater 120 W Bluetooth ..
                  </h4>
                  <p>
                    ₹ 3,119 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.1<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={speaker7} />
                </div>
                <Card.Body>
                  <h4>
                    GOVO GOSURROUND 985 Dolby Digital|wireless Subwoofer|52...
                  </h4>
                  <p>
                    ₹ 12,999 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    3.6<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={speaker8} />
                </div>
                <Card.Body>
                  <h4>
                    SONY SRS-XB100 Portable Super-Compact,Waterproof, 16Hrs...
                  </h4>
                  <p>
                    ₹ 3,989 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    3.8<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12}>
          <Row className="phonerow">
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={headphone5} />
                </div>
                <Card.Body>
                  <h4>
                    boAt Rockerz 450 w/ 40mm Drivers, 15 HRS Playback, Soft...
                  </h4>
                  <p>
                    ₹ 1,499 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.3<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={headphone6} />
                </div>
                <Card.Body>
                  <h4>
                    Boult W20 with Zen ENC Mic, 35H Battery Life, Low Laten...
                  </h4>
                  <p>
                    ₹ 999 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.1<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={headphone7} />
                </div>
                <Card.Body>
                  <h4>
                    Apple AirPods Pro (2nd generation) with MagSafe Case (U...)
                  </h4>
                  <p>
                    ₹ 18,999 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.6<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={headphone4} />
                </div>
                <Card.Body>
                  <h4>
                    Brolan Blue Wireless Ear Buds witth multiple features B...
                  </h4>
                  <p>
                    ₹ 629 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.8<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={12}>
          <Row className="phonerow">
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={Laptop9} />
                </div>
                <Card.Body>
                  <h4>
                    Acer Aspire Intel Core i5 12th Gen 12450H - (16 GB/512 GB
                    SSD/Windows 11 Home) AL15-52H Thin and Light...
                  </h4>
                  <p>
                    ₹ 46,990 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.4<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={Laptop10} />
                </div>
                <Card.Body>
                  <h4>
                    Apple MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS
                    Monterey) MLY13HN/A
                  </h4>
                  <p>
                    ₹ 83,990 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.7<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={Laptop11} />
                </div>
                <Card.Body>
                  <h4>
                    ASUS Vivobook 15 Intel Core i3 12th Gen 1215U - (16 GB/512
                    GB SSD/Windows 11 Home) X1504ZA-NJ341WS Thi...
                  </h4>
                  <p>
                    ₹ 39,990 <button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    4.3<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="Card_products">
                <div className="card-image">
                  <Card.Img variant="top" src={Laptop12} />
                </div>
                <Card.Body>
                  <h4>
                    Apple Apple M3 - (16 GB/256 GB SSD/macOS Sequoia) MC8K4HN/A
                  </h4>
                  <p>
                    ₹ 1,06,990<button className="card-btn">Add Card</button>
                  </p>
                  <button className="rating-btn">
                    5.0<i class="bi bi-star"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AllProducts;
