import { Container, Row, Col, Nav ,Tabs ,Tab } from "react-bootstrap";

function Products() {
  return (
    <div className="banner-about-main">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="Products_title">
              <h4>Trending Collection</h4>
            </div>
          </Col>
          <Col lg={6}>
            <div className="Products_nav-tab-btn">
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link to="/">All Item</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="">Phn</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="">Laptop</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
