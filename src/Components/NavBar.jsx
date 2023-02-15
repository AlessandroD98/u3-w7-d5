import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="p-0 px-5 position-sticky top-0">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Netflix Logo" style={{ width: "100px" }} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link to={"/tvshow"} className={`nav-link ${location.pathname === "/tvshow" ? "active" : ""}`}>
            TV Shows
          </Link>
          <Link to={"/movies"} className={`nav-link ${location.pathname === "/movies" ? "active" : ""}`}>
            Movies
          </Link>
          <Link to={"/recentadded"} className={`nav-link ${location.pathname === "/recentadded" ? "active" : ""}`}>
            Recent Added
          </Link>
          <Link to={"/mylist"} className={`nav-link ${location.pathname === "/mylist" ? "active" : ""}`}>
            My List
          </Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <FaSearch className="IconTop" />
          </Nav.Link>
          <Link to="/kids" className={`nav-link ${location.pathname === "/kids" ? "active" : ""}`}>
            KIDS
          </Link>
          <Nav.Link href="#memes">
            <FaBell className="IconTop" />
          </Nav.Link>
          <Nav.Link href="#memes">
            <FaUserAlt className="IconTop" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
