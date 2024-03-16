import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">5 Jobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to='/'>Google</Nav.Link>
            <Nav.Link as={Link} to='Cisco'>Cisco</Nav.Link>
            <Nav.Link as={Link} to='Crunchyroll'>Crunchyroll</Nav.Link>
            <Nav.Link as={Link} to='Honda'>Honda</Nav.Link>
            <Nav.Link as={Link} to='Intel'>Intel</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;