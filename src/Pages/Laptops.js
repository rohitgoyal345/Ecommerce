import { Container, Row, Col, Card} from "react-bootstrap";

// import image
import Laptop1 from '../Assets/Images/laptop1.jpeg';
import Laptop2 from '../Assets/Images/laptop2.jpeg';
import Laptop3 from '../Assets/Images/laptop3.jpeg';
import Laptop4 from '../Assets/Images/laptop4.jpeg';
import Laptop5 from '../Assets/Images/laptop5.jpeg';
import Laptop6 from '../Assets/Images/laptop6.jpeg';
import Laptop7 from '../Assets/Images/laptop7.jpeg';
import Laptop8 from '../Assets/Images/laptop8.jpeg';
import Laptop9 from '../Assets/Images/laptop9.jpeg';
import Laptop10 from '../Assets/Images/laptop10.jpeg';
import Laptop11 from '../Assets/Images/laptop11.jpeg';
import Laptop12 from '../Assets/Images/laptop12.jpeg';

function Laptops() {
  return (
    <div className="banner-about-main">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop1} />
                  </div>
                  <Card.Body>
                    <h4>HP Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) 15s-fq5330TU|15-fd0111TU Thin and...</h4>
                    <p>₹ 52,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.2<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop2}  />
                  </div>
                  <Card.Body>
                    <h4>HP Intel Core i5 13th Gen 1334U - (16 GB/512 GB SSD/Windows 11 Home) 15-fd0315TU Thin and Light Laptop</h4>
                    <p>₹ 53,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.0<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop3}  />
                  </div>
                  <Card.Body>
                    <h4>DELL Intel Core i5 13th Gen 1334U - (8 GB/512 GB SSD/Wi...)</h4>
                    <p>₹ 47,999 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.3<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop4}  />
                  </div>
                  <Card.Body>
                    <h4>DELL Inspiron Intel Core i5 13th Gen 13450HX - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA ..)</h4>
                    <p>₹ 74,890 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">5.0<i class="bi bi-star"></i></button>
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
                    <Card.Img variant="top" src={Laptop5}  />
                  </div>
                  <Card.Body>
                    <h4>Apple MacBook Air Apple M3 - (16 GB/1 TB SSD/macOS Sonoma) MXCR3HN/A</h4>
                    <p>₹ 1,74,900 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.2<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop6}  />
                  </div>
                  <Card.Body>
                    <h4>SAMSUNG Galaxy Book4 Intel Core i5 13th Gen 1335U - (16 GB/512 GB SSD/Windows 11 Home) NP750XGJ-KG2IN ...</h4>
                    <p>₹ 61,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.5<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop7}  />
                  </div>
                  <Card.Body>
                    <h4>DELL Inspiron 3520 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 La...</h4>
                    <p>₹ 34,540 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.2<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop8}  />
                  </div>
                  <Card.Body>
                    <h4>Lenovo IdeaPad 3 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) 15IAU7 Thin and Ligh...</h4>
                    <p>₹ 29,690 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.4<i class="bi bi-star"></i></button>
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
                    <Card.Img variant="top" src={Laptop9}  />
                  </div>
                  <Card.Body>
                    <h4>Acer Aspire Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home) AL15-52H Thin and Light...</h4>
                    <p>₹ 46,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.4<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop10}   />
                  </div>
                  <Card.Body>
                    <h4>Apple MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY13HN/A</h4>
                    <p>₹ 83,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.7<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop11}   />
                  </div>
                  <Card.Body>
                    <h4>ASUS Vivobook 15 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) X1504ZA-NJ341WS Thi...</h4>
                    <p>₹ 39,990 <button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">4.3<i class="bi bi-star"></i></button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="Card_products">
                  <div className="card-image">
                    <Card.Img variant="top" src={Laptop12}   />
                  </div>
                  <Card.Body>
                    <h4>Apple Apple M3 - (16 GB/256 GB SSD/macOS Sequoia) MC8K4HN/A</h4>
                    <p>₹ 1,06,990<button className="card-btn">Add Card</button></p>
                    <button className="rating-btn">5.0<i class="bi bi-star"></i></button>
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

export default Laptops;
