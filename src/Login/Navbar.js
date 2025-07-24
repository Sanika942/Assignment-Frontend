import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink tag={RRNavLink} to="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/add-project">
            Add Project
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/all-projects">
            Project Listing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;
