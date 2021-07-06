import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { getPayload } from './auth/helpers/auth'



const Navigation = () => {
  //Basket Modal state
  const [smShow, setSmShow] = useState(false)


  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const location = useLocation()

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
      <Navbar collapseOnSelect expand="lg" className="nav-style" >

        <Navbar.Brand href="/" ><Image src="https://res.cloudinary.com/inetab/image/upload/c_scale,q_100,r_0,w_60/a_0/v1625566335/logo_size_vfeyuq.jpg" roundedCircle/></Navbar.Brand>
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
          <Nav>
            <Nav.Item><span>()</span></Nav.Item>
            <Nav.Link onClick={() => setSmShow(true)}><i className="fas fa-shopping-bag"></i></Nav.Link>
            {/* Basket Modal */}
            <Modal
              className="bg-transparent"
              size="m"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  <Image src="https://res.cloudinary.com/inetab/image/upload/v1625583602/logo_size_htxzty.jpg"/>
                    Your Shopping Cart
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Products will go in here</Modal.Body>
            </Modal>
            <>
              {!userIsAuthenticated() ?
                <>
                  <Nav.Link className="text-style-color" href="/register">Register</Nav.Link>
                  <Nav.Link className="text-style-color" eventKey={2} href="/login">Login</Nav.Link>
                </>
                :
                <Nav.Link className="text-style-color" onClick={handleLogout}>Log Out</Nav.Link>
              }
            </>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    </>
  )






  
}

export default Navigation
