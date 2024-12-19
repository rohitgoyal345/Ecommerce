import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = [
        {
          id: 1,
          name: 'iPhone 12',
          category: 'SmartPhone',
          image: 'https://linktoiphone12image.com/iphone12.jpg',
          description: 'iPhone 12 with 64GB storage',
          price: '$799',
        },
        {
          id: 2,
          name: 'Samsung Galaxy S21',
          category: 'SmartPhone',
          image: 'https://linktogalaxys21image.com/galaxys21.jpg',
          description: 'Samsung Galaxy S21 with 128GB storage',
          price: '$999',
        },
        
      ];
      setProducts(allProducts);
    };

    fetchProducts();
  }, []);

  return (
    <Container className="all-products">
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-muted">{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllProducts;
