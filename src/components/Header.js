import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark container-fluid">
      <Container>
        <Navbar.Brand href="#home" className='text-light' >Aizaz Khan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light' >Home</Nav.Link>
            <Nav.Link href="#link" className='text-light' >Link</Nav.Link>
            <NavDropdown title="Reviews" style={{color:"white !important "}}className={'text-light'} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Seller Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buyer Reviews</NavDropdown.Item>
              </NavDropdown>

            <Nav.Link href="#contact-us" className='text-light' >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;