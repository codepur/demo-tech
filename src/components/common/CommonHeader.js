import Link from 'next/link';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image className="img img-fluid w-50" id="logo_img" src="https://www.jsdincorporation.com/images/logo 2-01.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="INCORPORATE A NEW COMPANY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">👉🏻 Private Limited Company Registration </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">👉🏻 Limited Liability Partnership Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">👉🏻 One Person Company Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">👉🏻 Partnership Company Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">👉🏻 Sole Proprietorship Firm Registration</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="REGISTRATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">👉🏻 Gst Registration </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">👉🏻 Import Export Code Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">👉🏻 Startup India Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">👉🏻 LUT Under GST</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">👉🏻 SSI - MSME Registration</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FILLINGS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">👉🏻 GST Return Filing </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">👉🏻 ITR Filing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">👉🏻 E-Way Bill</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">👉🏻 TDS Return Filing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


