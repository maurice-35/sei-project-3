import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/"><p className="nav-link" href="#">Home</p></Link> 
            <Link to="/about"><p className="nav-link" href="#">About</p></Link>
            <Link to="/products/nologin"> <p className="nav-link" href="#"> No login Our Products</p></Link>
            <Link to="/products/login"> <p className="nav-link" href="#">Login Our Products</p></Link>
            <Link to="/login"><p className="nav-link" href="#">Login</p></Link>
            <Link to="/register"><p className="nav-link" href="#">Register</p></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
