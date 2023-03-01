import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ContactList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">AddUser</Nav.Link>
            <Nav.Link as={Link} to="/users">UserLists</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar