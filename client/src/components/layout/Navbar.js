import React, { useContext, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const NavbarContact = (props) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
  };

  const notAuthenticatedRoute = () => {
    return (
      <>
        <NavItem>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/signup' className='nav-link'>
            Signup
          </Link>
        </NavItem>
      </>
    );
  };

  const isAuthenticatedRoute = () => {
    return (
      <>
        <NavItem>
          <Link to='/' className='nav-link'>
            Welcome {user && user.name}
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/' className='nav-link' onClick={handleLogout}>
            Logout
          </Link>
        </NavItem>
      </>
    );
  };

  return (
    <div>
      <Navbar color='dark' light expand='md'>
        <Link to='/' className='navbar-brand'>
          Contact Keeper
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </NavItem>
            {isAuthenticated ? isAuthenticatedRoute() : notAuthenticatedRoute()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarContact;
