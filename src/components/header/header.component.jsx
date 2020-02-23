import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div>
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Navbar.Toggle className="nav-bar-toggler" aria-controls="basic-navbar-nav">
                    <span className="toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-capitalize">
                    <Nav.Item className="mx-4">
                        <a href="#header" class="nav-link-test">home</a>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <a href="#about" class="nav-link-test">about</a>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <a href="#store" class="nav-link-test">store</a>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <a href="#services" class="nav-link-test">services</a>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <a href="#cakes" class="nav-link-test">order</a>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);


export default Header;