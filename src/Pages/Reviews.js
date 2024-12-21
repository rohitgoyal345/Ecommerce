import { Container, Row, Col, Card, Table } from "react-bootstrap";

import reviewimg1 from "../Assets/Images/samsung.jpeg";
import reviewimg2 from "../Assets/Images/iphone15pro.jpeg";
import reviewimg3 from "../Assets/Images/vivo2.jpeg";
import reviewimg4 from "../Assets/Images/Motorola.jpeg";
import speaker3 from "../Assets/Images/speaker3.jpeg";
import speaker4 from "../Assets/Images/speaker4.jpeg";
import speaker11 from "../Assets/Images/speaker11.jpeg";
import headphone6 from "../Assets/Images/headphone6.jpeg";
import headphone7 from "../Assets/Images/headphone7.jpeg";
import headphone10 from "../Assets/Images/headphone10.jpeg";
import Laptop1 from "../Assets/Images/laptop1.jpeg";
import Laptop2 from "../Assets/Images/laptop2.jpeg";


function Reviews() {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Card className="Card_review">
            <div className="card-title">
              <h4>Customer Reviews</h4>
            </div>
            <Card.Body  id="room-card-body">
                <div className="table-responsive">
                  <Table bordered hover text-center custom-table id="main_table">
                    <thead id="thead-table">
                      <tr>
                        <th>Product Details</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        <th>Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={reviewimg1} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>SAMSUNG Galaxy S23<br/> 5G (128 GB)</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>5 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={reviewimg2} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>IPhone 15 Pro<br/> (512 GB)</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Excellent</td>
                        <td>1 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={reviewimg3} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>vivo X200 Pro<br/> 5G (512 GB)</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Excellent</td>
                        <td>8 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={reviewimg4} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>Motorola g45 <br/> 5G (128 GB)</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>2 Months Ago</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={speaker3} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>Marshall Willen <br/> Speaker</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>5 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={speaker4} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>artis BT08 <br/> Speaker</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Excellent</td>
                        <td>1 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={speaker11} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>boAt Stone Lumos <br/> speaker</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Excellent</td>
                        <td>8 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={headphone6} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>Boult W20 with <br/>Earbuds</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>2 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={headphone7} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>Apple AirPods Pro<br/>Earbuds</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>2 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={headphone10} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>vivo TWS 3e <br/>Earbuds</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>9 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={Laptop1} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>HP Intel Core i5<br/> 12th Gen</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>4 Months Ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-product-main">
                            <div className="table-img">
                              <img src={Laptop2} alt="" />
                            </div>
                            <div className="table-title">
                              <h5>HP Intel Core i5<br/> 13th Gen </h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Good</td>
                        <td>6 Months Ago</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <div className="other-collection third-other-collection">
            <h4>New Products</h4>
            <h2>40% Off Or More</h2>
            <p>EXCLUSIVE HEADPHONE</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
