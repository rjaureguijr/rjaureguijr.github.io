import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from "react-router-dom";

export class NavBar extends React.Component {
    render () {
        return (
            <Navbar collapseOnSelect bg="primary" expand="sm" variant="dark">
                <Navbar.Brand> Rudy Jauregui</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        {/* <NavLink className="nav-link" to="/topics">Topics</NavLink> */}
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      );
    }
}