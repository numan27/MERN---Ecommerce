import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-4">
                            <Link className="nav-link" to="/">Products</Link>
                            <Link className="nav-link" to="/add">Add Product</Link>
                            <Link className="nav-link" to="/update">Update Product</Link>
                            <Link className="nav-link" to="/logout">Logout</Link>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
