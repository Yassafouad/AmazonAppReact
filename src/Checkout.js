import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import { Col, Container, Row } from "reactstrap";
import { basketTotal } from "./reducer";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="theCart">
      <Container>
        <Row>
          <Col md="9" sm="12">
            {basket.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </Col>
          <Col md="3" sm="12">
            <div className="subTotal">
              <p>subtotal ( {basket.length} items)</p>
              <br />
              {basketTotal(basket)}
              <br />
              <button>Proccessed To Checkout</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
