import { Container, Row, Col, Card, Table } from "react-bootstrap";

function Reviews() {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Card className="Card_review">
            <div className="card-title"></div>
            <Card.Body>
              <div className="card-review-table">
                <div className="table-responsive">
                  <Table bordered hover>
                    <thead>
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
                              <img src="" alt="" />
                            </div>
                            <div className="table-title">
                              <h5></h5>
                            </div>
                          </div>
                        </td>
                        <td>Jhon Doe</td>
                        <td>
                        <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                        </td>
                        <td>Product Is Very Good</td>
                        <td>1 Year Ago</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
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
