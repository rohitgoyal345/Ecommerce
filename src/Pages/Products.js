import { Container, Row, Col, Nav , Tabs, Tab } from "react-bootstrap";


import SmartPhone from "../Pages/SmartPhone";
import Speakers from "../Pages/Speakers";
import AllProducts from "../Pages/All_product";
import Headphones from "../Pages/Headphones";
import Laptops from "../Pages/Laptops";

function Products() {
  return (
    <div className="banner-about-main">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="Products_title">
              <h4>Trending Products</h4>
            </div>
          </Col>
          <Col lg={12}>
          <Tabs defaultActiveKey="first" id="left-tabs-example" className="mb-3">
             
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth">Tab 4</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">Tab 5</Nav.Link> 
                </Nav.Item>
              </Nav>

             
              <Tab eventKey="first" title="Tab 1">
                <AllProducts /> 
              </Tab>
              <Tab eventKey="second" title="SmartPhones">
                <SmartPhone />
              </Tab>
              <Tab eventKey="third" title="Speakers">
                <Speakers />
              </Tab>
              <Tab eventKey="forth" title="Headphones">
                <Headphones />
              </Tab>
              <Tab eventKey="five" title="Laptops">
                <Laptops />
              </Tab>
            </Tabs>
           </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
