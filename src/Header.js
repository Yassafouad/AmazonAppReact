import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom"
import { BsSearch, BsCart } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import useStateValue from './StateProvider';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [{ basket }, dispatch] = useStateValue()

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className='myNav'>
        <NavbarBrand >
          <NavLink to="/"><img src="/images/amazon_PNG211.png" alt="" /></NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto theNav align-items-center" navbar >
            <NavItem className='location'>
              <GoLocation />
              <div>
                <p>Deliver to</p>
                <h3>Egypt</h3>
              </div>
            </NavItem>
            <NavItem className='inputs'>
              <select>
                <option value="All">
                  All
                </option>
                <option value="Devices">
                  Devices
                </option>
                <option value="Pharmacy">
                  Pharmacy
                </option>
              </select>
              <form method='post' className='inputDiv'>
                <input type="text" />
                <button><BsSearch /></button>
              </form>
            </NavItem>
            <NavItem className='lang'>

              <img src="/images/USA-Grunge-Flag-PNG-Image.png" alt="" />
              <select name='lang'>
                <option value="en">en</option>
              </select>
            </NavItem>
            <NavItem className='navyyitem'>
              <NavLink to="/">
                <p>
                Hello, Sign In
                </p>
              </NavLink>
              <h3>Account & Lists</h3>
            </NavItem>
            <NavItem className='navyyitem'>
              <p>
                Returns
              </p>
              <h3>& Orders</h3>
            </NavItem>
            <NavItem>
              <NavLink to="/Checkout">
                <div className='cartDiv'>
                  <p>{basket.length}</p>
                  <BsCart />
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='navDiv'>
        <NavLink to="#">All</NavLink>
        <NavLink to="#">Today's Deals</NavLink>
        <NavLink to="#">Buy Again</NavLink>
        <NavLink to="#">Customer Service</NavLink>
        <NavLink to="#">Browsing History</NavLink>
        <NavLink to="#">Gift Cards</NavLink>
        <NavLink to="#">Registry</NavLink>
        <NavLink to="#">Sell</NavLink>
        <NavLink to="#">Amazon.com</NavLink>
      </div>

    </div>
  )
}

export default Header