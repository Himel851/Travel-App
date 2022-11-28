import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../image/Logo.png";
import './Header.scss'

function CollapsibleExample() {
  return (
    <div className="navbar">
      <div className="navImg">
        <img src={logo} alt="" />
      </div>

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <div>
          <Container>
            <Navbar.Toggle
              className="bg-dark navToggle"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navMenu">
                <Nav.Link className="list" href="#features">
                  Desitnations
                </Nav.Link>
                <Nav.Link className="list" href="#features">
                  Hotels
                </Nav.Link>
                <Nav.Link className="list" href="#features">
                  Flights
                </Nav.Link>
                <Nav.Link className="list" href="#features">
                  Bookings
                </Nav.Link>
                <Nav.Link className="list" href="#features">
                  Login
                </Nav.Link>
                <Nav.Link className="list" href="#features">
                  <div className="signUp">Sign Up</div>
                </Nav.Link>
                <NavDropdown
                  className="list "
                  title={<span className="dropDown">EN</span>}
                >
                  <NavDropdown.Item >Hindi</NavDropdown.Item>
                  <NavDropdown.Item >Bangla</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
