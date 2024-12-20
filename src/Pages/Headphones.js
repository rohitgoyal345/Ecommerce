import { Container, Row, Col, Card } from "react-bootstrap";

// import image
import headphone1 from "../Assets/Images/headphone1.jpeg";
import headphone2 from "../Assets/Images/headphone2.jpeg";
import headphone3 from "../Assets/Images/headphone3.jpeg";
import headphone4 from "../Assets/Images/headphone4.jpeg";
import headphone5 from "../Assets/Images/headphone5.jpeg";
import headphone6 from "../Assets/Images/headphone6.jpeg";
import headphone7 from "../Assets/Images/headphone7.jpeg";
import headphone8 from "../Assets/Images/headphone8.jpeg";
import headphone9 from "../Assets/Images/headphone9.jpeg";
import headphone10 from "../Assets/Images/headphone10.jpeg";
import headphone11 from "../Assets/Images/headphone11.jpeg";
import headphone12 from "../Assets/Images/headphone12.jpeg";

function Headphones() {
  return (
    <div className="banner-about-main">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={headphone1} />
                  </div>
                  <Card.Body>
                    <h4>
                      REDMI 5A Earbuds, ANC ,upto 30 hrs of Battery life with...
                    </h4>
                    <p>
                      ₹ 1,199 <button className="card-btn">Add Card</button>
                    </p>
                    <button className="rating-btn">
                      4.2<i class="bi bi-star"></i>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={headphone2} />
                  </div>
                  <Card.Body>
                    <h4>
                      boAt Rockerz 450 Pro with Upto 70 Hours Playback Blueto...
                    </h4>
                    <p>
                      ₹ 1,999 <button className="card-btn">Add Card</button>
                    </p>
                    <button className="rating-btn">
                      4.2<i class="bi bi-star"></i>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={headphone3} />
                  </div>
                  <Card.Body>
                    <h4>
                      OnePlus Bullets Wireless Z2 ANC Earphones with 45dB Hyb...
                    </h4>
                    <p>
                      ₹ 2,299 <button className="card-btn">Add Card</button>
                    </p>
                    <button className="rating-btn">
                      4.2<i class="bi bi-star"></i>
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
                      3.4<i class="bi bi-star"></i>
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
                      Apple AirPods Pro (2nd generation) with MagSafe Case
                      (U...)
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
                    <Card.Img variant="top" src={headphone8} />
                  </div>
                  <Card.Body>
                    <h4>Apple AirPods Max Bluetooth</h4>
                    <p>
                      ₹ 59,900 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={headphone9} />
                  </div>
                  <Card.Body>
                    <h4>SAMSUNG Galaxy Buds 3 Pro Bluetooth |...</h4>
                    <p>
                      ₹ 19,499 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={headphone10} />
                  </div>
                  <Card.Body>
                    <h4>
                      vivo TWS 3e buds up-to 30dB Active Noise Cancellation |...
                    </h4>
                    <p>
                      ₹ 18,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={headphone11} />
                  </div>
                  <Card.Body>
                    <h4>
                      Portronics Harmonics Z7 with 40Hrs Playback, Gaming Mod...
                    </h4>
                    <p>
                      ₹ 571 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={headphone12} />
                  </div>
                  <Card.Body>
                    <h4>
                      Boult Y1 Pro with Zen Quad Mic ENC, 60Hrs Battery, Fast...
                    </h4>
                    <p>
                      ₹ 1,099 <button className="card-btn">Add Card</button>
                    </p>
                    <button className="rating-btn">
                      4.1<i class="bi bi-star"></i>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Headphones;
