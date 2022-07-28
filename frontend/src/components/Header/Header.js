import React from 'react';
import { Button, Container,
     Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Notepad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            
            <Nav.Link href="/mynotes">
              
                My Notes  
              
              </Nav.Link>
            <NavDropdown title="Shamama Mihar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


  
export default Header;