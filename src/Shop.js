import React from "react";
import Product from "./Product";
import products from "./products.json";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
function Shop() {
  let { categoryy } = useParams();
  return (
    <div>
      <section className="products">
        <Container>
          <Row>
            {products
              .filter((product) => {
                if (product.category == categoryy) return product;
              })
              .map((product) => (
                <Col md="3" sm="12">
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Shop;
