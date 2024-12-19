import { Container, Row, Col, Card} from "react-bootstrap";

// import image
import speaker1 from '../Assets/Images/speaker1.jpeg';
import speaker2 from '../Assets/Images/speaker2.jpeg';
import speaker3 from '../Assets/Images/speaker3.jpeg';
import speaker4 from '../Assets/Images/speaker4.jpeg';
import speaker5 from '../Assets/Images/speaker5.jpeg';
import speaker6 from '../Assets/Images/speaker6.jpeg';
import speaker7 from '../Assets/Images/speaker7.jpeg';
import speaker8 from '../Assets/Images/speaker8.jpeg';
import speaker9 from '../Assets/Images/speaker9.jpeg';
import speaker10 from '../Assets/Images/speaker10.jpeg';
import speaker11 from '../Assets/Images/speaker11.jpeg';
import speaker12 from '../Assets/Images/speaker12.jpeg';

function Speakers() {
  return (
    <div className="banner-about-main">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker1} />
                  </div>
                  <Card.Body>
                    <h4>Mi Sound Outdoor 30W,IP67, Upto 12 Hours Playback 30 W ...</h4>
                    <p>₹ 3,499 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.7<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker2}  />
                  </div>
                  <Card.Body>
                    <h4>boAt Stone 350 10 W Bluetooth Speaker</h4>
                    <p>₹ 1,499 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.3<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker3}  />
                  </div>
                  <Card.Body>
                    <h4>Marshall Willen 10 W Bluetooth Speaker</h4>
                    <p>₹ 8,499 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.8<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker4}  />
                  </div>
                  <Card.Body>
                    <h4>artis BT08 6 W Bluetooth Speaker</h4>
                    <p>₹ 799 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">3.6<i class="bi bi-star"></i></button>
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
                    <Card.Img variant="top" src={speaker5}  />
                  </div>
                  <Card.Body>
                    <h4>CREATIVE SBS E2900 120 W Bluetooth Laptop/Desktop Speak..</h4>
                    <p>₹ 4,499 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.0<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker6}  />
                  </div>
                  <Card.Body>
                    <h4>RZG Dj Sound Music System Home theater 120 W Bluetooth ..</h4>
                    <p>₹ 3,119 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.1<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker7}  />
                  </div>
                  <Card.Body>
                    <h4>GOVO GOSURROUND 985 Dolby Digital|wireless Subwoofer|52...</h4>
                    <p>₹ 12,999 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">3.6<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker8}  />
                  </div>
                  <Card.Body>
                    <h4>SONY SRS-XB100 Portable Super-Compact,Waterproof, 16Hrs...</h4>
                    <p>₹ 3,989 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">3.8<i class="bi bi-star"></i></button>
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
                    <Card.Img variant="top" src={speaker9}  />
                  </div>
                  <Card.Body>
                    <h4>JBL Charge 5 with 20Hr Playtime,IP67 Rating,7500 mAh Po...</h4>
                    <p>₹ 14,999 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.4<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker10}   />
                  </div>
                  <Card.Body>
                    <h4>Mivi Play 5 W Portable Bluetooth Speaker</h4>
                    <p>₹ 699 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.2<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker11}   />
                  </div>
                  <Card.Body>
                    <h4>boAt Stone Lumos w/ LED Projection, 9HRS Playback,Heara...</h4>
                    <p>₹ 4,999 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.1<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={speaker12}   />
                  </div>
                  <Card.Body>
                    <h4>Marshall Woburn II 130 W Bluetooth Speaker</h4>
                    <p>₹ 32,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.6<i class="bi bi-star"></i></button>
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

export default Speakers;
