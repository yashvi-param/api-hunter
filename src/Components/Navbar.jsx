
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from "react-bootstrap/Button"
import { useState } from 'react';
import Orders from './Orders';

function BasicExample({cartItems,onShow}) {

  const [showOrder,setShowOrder] = useState(false);

  return (
    <Navbar expand="lg" className="shadow-sm navbar-back" >
      <Container>
        <Navbar.Brand href="#home">Urban-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
           <div className="d-flex gap-4">
             <Button onClick={onShow} ><i className="fa-solid fa-cart-shopping"></i>Cart<Badge bg="secondary">{cartItems}</Badge></Button>
            <Button onClick={()=>setShowOrder(true)}  >Your Orders</Button>
            {showOrder&&<Orders show={showOrder} hide={()=>setShowOrder(false)}  />}
           </div>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
