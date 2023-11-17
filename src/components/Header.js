import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../images/logo.png';

function Header() {
  return (
    <Navbar expand="lg" className="bg-white container-fluid">
      <Container>
        <Navbar.Brand href="#logo" ><img src={image} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{paddingLeft:"44rem"}}>
            <Nav.Link href="#home" className='text-dark' >Home</Nav.Link>
            <Nav.Link href="#menu" className='text-dark' >Menu</Nav.Link>
            <Nav.Link href="#about" className='text-dark' >About Us</Nav.Link>
            <Nav.Link href="#contact" className='text-dark' >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;