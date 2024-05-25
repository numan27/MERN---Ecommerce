import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();

    const auth = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/signup")
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-dark fixed-top">
                <Container className='py-3'>
                    <Navbar.Brand className='text-light fs-3' href="#home">E-Commerce Store</Navbar.Brand>
                    {auth ? (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto gap-4">
                                    <Link className="nav-link text-light fs-5" to="/">Products</Link>
                                    <Link className="nav-link text-light fs-5" to="/add">Add Product</Link>
                                    <Link className="nav-link text-light fs-5" to="/update">Update Product</Link>
                                    <Link className="nav-link text-light fs-5" to="/profile">Profile</Link>
                                    <Link onClick={handleLogout} className="nav-link text-light fs-5" to="/signup">Logout
                                       <span className='ms-2'>({JSON.parse(auth).name})</span> 
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    ) : (
                        <Nav className="ms-auto gap-4">
                            <Link className="nav-link text-light fs-5" to="/signup">Sign Up</Link>
                            <Link className="nav-link text-light fs-5" to="/login">Login</Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </div>
    )
}
