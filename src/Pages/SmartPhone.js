import { Container, Row, Col, Card } from "react-bootstrap";

//images import
import iphone15 from "../Assets/Images/iphone15.jpeg";
import iphone15pro from "../Assets/Images/iphone15pro.jpeg";
import iphone16 from "../Assets/Images/iphone16.jpeg";
import iphone16promax from "../Assets/Images/iphone16promax.jpeg";
import Motorola from "../Assets/Images/Motorola.jpeg";
import vivo from "../Assets/Images/vivo.jpeg";
import vivo2 from "../Assets/Images/vivo2.jpeg";
import Samsung from "../Assets/Images/samsung.jpeg";
import oppo from "../Assets/Images/oppo.jpeg";
import realme from "../Assets/Images/realme.jpeg";
import redmi from "../Assets/Images/redmi.jpeg";
import oneplus from "../Assets/Images/oneplus.jpeg";

function SmartPhone() {
  return (
    <div className="banner-about-main">
      <Container>
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
                    <Card.Img variant="top" src={Samsung} />
                  </div>
                  <Card.Body>
                    <h4>SAMSUNG Galaxy S23 5G (Cream, 128 GB)</h4>
                    <p>
                      ₹ 42,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={oppo} />
                  </div>
                  <Card.Body>
                    <h4>OPPO Find X8 5G (Space Black, 512 GB)</h4>
                    <p>
                      ₹ 79,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={iphone15pro} />
                  </div>
                  <Card.Body>
                    <h4>Apple iPhone 15 Pro (Black Titanium, 512 GB)</h4>
                    <p>
                      ₹ 1,21,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={iphone16promax} />
                  </div>
                  <Card.Body>
                    <h4>Apple iPhone 16 Pro Max (Desert Titanium, 256 GB)</h4>
                    <p>
                      ₹ 1,44,900 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={realme} />
                  </div>
                  <Card.Body>
                    <h4>realme 12x 5G (Twilight Purple, 128 GB)</h4>
                    <p>
                      ₹ 13,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={vivo2} />
                  </div>
                  <Card.Body>
                    <h4>vivo X200 Pro 5G (Cosmos Black, 512 GB)</h4>
                    <p>
                      ₹ 94,999 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={redmi} />
                  </div>
                  <Card.Body>
                    <h4>REDMI 13c 5G (Starlight Black, 128 GB)</h4>
                    <p>
                      ₹ 9,744 <button className="card-btn">Add Card</button>
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
                    <Card.Img variant="top" src={oneplus} />
                  </div>
                  <Card.Body>
                    <h4>OnePlus Nord CE4 lite 5G (SUPER SILVER, 256 GB)</h4>
                    <p>
                      ₹ 20,540 <button className="card-btn">Add Card</button>
                    </p>
                    <button className="rating-btn">
                      4.8<i class="bi bi-star"></i>
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

export default SmartPhone;
