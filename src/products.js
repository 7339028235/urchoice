import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import { Image, Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
function Products() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    await Axios.get(`http://localhost:5000/products`)
      .then(async (res) => {
        let products = await res.data;
        //update products state
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllProducts();

  }, [])
  return (
    <div className="bg-white">
      <Container className="">
        <h2 className="">Products</h2>

      
        <Row className="">
          {products.map((product) => (
           
              <Col as={Link} to={`/productdetails/${product.id}`} xs={6} md={6} lg={6} xl={3} xxl={3}  key={product.id} href={product.href}>
              <Card   style={{border:'0px'}} className="product-card m-2">
                <Card.Img variant="top" weight={150} height={200}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;