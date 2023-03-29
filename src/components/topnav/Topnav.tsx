import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";



// yarn add react-bootstrap
const Topnav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand: Logo + App Name */}
        <NavLink to="/" className="navbar-brand">
          <span className="text-muted "> AI Dream </span>
          &nbsp;
      
        </NavLink>
        {/* Burger: */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Links */}
            <NavLink className="nav-link" to='/bots'>
              Gallery
            </NavLink>
             <NavLink className="nav-link" to="/news">
              AI News 
            </NavLink>
             <NavLink className="nav-link" to="/favorites">
              Favorite articles 
            </NavLink>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
