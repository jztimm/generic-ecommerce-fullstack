import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>Merch Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link><ShoppingCartIcon/> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link><AccountCircleIcon/> Sign In</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header
