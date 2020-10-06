import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom';

import classes from './MenuBar.module.css';

function MenuBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className = {classes.navitem}>
                <NavLink to='/home' className = {classes.navitems} activeClassName={classes.active}  >Home</NavLink>
              </NavItem>
              <NavItem className = {classes.navitem}>
                <NavLink to='/task' className = {classes.navitems} activeClassName={classes.active} >Tasks</NavLink>
              </NavItem>
              <NavItem className = {classes.navitem}>
                <NavLink to='/user' className = {classes.navitems} activeClassName={classes.active } >User</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default MenuBar;
