import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Lladrovci</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>





    {/* <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="blogs">Blogs</Link>
            </li>

            <li>
                <Link to="contact">Contact</Link>
            </li>
        </ul>
    </nav> */}
    <Outlet/>
    </>
  )
}

export default Layout