import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarContact = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarContact;
