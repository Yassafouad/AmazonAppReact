import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="3" sm="12">
            <p>Get to Know Us</p>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </Col>
          <Col md="3" sm="12">
            <p>Make Money with Us</p>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">›See More Make Money with Us</a>
          </Col>
          <Col md="3" sm="12">
            <p>Amazon Payment Products</p>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Amazon Currency Converter</a>
          </Col>
          <Col md="3" sm="12">
            <p>Let Us Help You</p>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#"> Amazon Assistant</a>
            <a href="#">Help</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
