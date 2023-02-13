import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="p-0 px-5 position-sticky top-0">
      <>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" className="active">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recent Addedd</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaSearch className="IconTop" />
            </Nav.Link>
            <Nav.Link href="#memes">KIDS</Nav.Link>
            <Nav.Link href="#memes">
              <FaBell className="IconTop" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <FaUserAlt className="IconTop" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavBar;
