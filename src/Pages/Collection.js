import { Container, Row, Col, Button} from "react-bootstrap";


function Collection() {
  return (
      <Container>
        <Row>
          <Col lg={12}>
            
             <div className="collection-heading">
                <h4>Best Selling Collections</h4>
                <h2>Big Sale</h2>
                <h2>On IPhones</h2>
                <Button>Shop NOW</Button>
             </div>

          </Col>

          <Col lg={4}>
            <div className="other-collection">
              <h4>New Products</h4>
              <h2>30% Off Or More</h2>
              <p>Free Delivery all orders</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="other-collection third-other-collection">
              <h4>New Products</h4>
              <h2>40% Off Or More</h2>
              <p>EXCLUSIVE HEADPHONE</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="other-collection second-other-collection">
              <h4>New Products</h4>
              <h2>Speakers Deals</h2>
              <p>Up to 45% off</p>
            </div>
          </Col>

        </Row>
      </Container>
  );
}

export default Collection;
