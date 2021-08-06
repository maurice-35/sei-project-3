import React, { useState, useEffect } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'
import BasketModal from './Popups/BasketModal.js'
import { getPayload } from './auth/helpers/auth'




const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()
  const history = useHistory()

  useEffect(() => {
    setIsActive(false)
  }, [pathname])
  
  //Remove Token from Local Storage and Display HoemPage
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  //Nav bar change based on user being logged in or not
  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }
  userIsAuthenticated()


  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-style">
        <Navbar.Brand href="/" ><Image src="https://res.cloudinary.com/inetab/image/upload/c_scale,w_50/v1625579736/SEI-Project-3/logo_size_invert_ejdrzn.jpg" roundedCircle/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-style-color" href="/about">About</Nav.Link>
            <NavDropdown className="text-style-color" title="Our Products" id="basic-nav-dropdown">
              <Link to="/products"><li className="dropdown-item" >Overview <i className="fas fa-paw"></i></li></Link>
              <Link to="/cats"><li className="dropdown-item">Cats <i className="fas fa-cat"></i></li></Link>
              <Link to="/dogs"><li className="dropdown-item">Dogs <i className="fas fa-dog"></i></li></Link>
            </NavDropdown>
          </Nav>
          <Nav className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <BasketModal />
            
            {!userIsAuthenticated() ?
              <>
                <Nav.Link className="text-style-color" href="/register">Register</Nav.Link>
                <Nav.Link className="text-style-color" eventKey={2} href="/login">Login</Nav.Link>
              </>
              :
              <>
                <Nav.Link href="/pet" className="text-style-color">My Pet</Nav.Link>
                <Nav.Link href="/profile" className="text-style-color">Add Pet</Nav.Link>
                <Nav.Link className="text-style-color" onClick={handleLogout}>Log Out</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )






  
}

export default Navigation
