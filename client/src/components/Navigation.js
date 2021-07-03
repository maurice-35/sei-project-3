import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/"><p className="navbar-brand" href="#">Tails & Whiskers</p></Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavDropdown title="Our Products" id="basic-nav-dropdown">
                <Link to="/products"><li className="dropdown-item">Overview <i className="fas fa-paw"></i></li></Link>
                <hr />
                <Link to="/cats"><li className="dropdown-item">Cats <i className="fas fa-cat"></i></li></Link>
                <Link to="/dogs"><li className="dropdown-item">Dogs <i className="fas fa-dog"></i></li></Link>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link to="/about"><p className="nav-link" href="#">About Us</p></Link>  
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login"><p className="nav-link" href="#">Login</p></Link>
            <Link to="/register"><p className="nav-link" href="#">Register</p></Link>
          </form>
        </div>
      </div>
    </nav>




  /* 
          // <nav className="navbar navbar-expand-lg navbar-light bg-light">
          //   <div className="container-fluid">
      
          //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          //       <span className="navbar-toggler-icon"></span>
          //     </button>
          //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          //       <div className="navbar-nav">
          //         <Link to="/"><p className="nav-link" href="#">Home</p></Link>
          //         <Link to="/about"><p className="nav-link" href="#">About</p></Link>
      
                  <NavDropdown title="Our Products" id="basic-nav-dropdown">
      
                    <Link to="/products"><li className="dropdown-item">Overview <i className="fas fa-paw"></i></li></Link>
                    <hr />
      
                    <Link to="/cats"><li className="dropdown-item">Cats <i className="fas fa-cat"></i></li></Link>
                    <Link to="/dogs"><li className="dropdown-item">Dogs <i className="fas fa-dog"></i></li></Link>
      
      
                  </NavDropdown>
      
          //         <div className="d-flex">
          //           <Link to="/login"><p className="nav-link" href="#">Login</p></Link>
          //           <Link to="/register"><p className="nav-link" href="#">Register</p></Link>
          //         </div>
      
          //       </div>
          //     </div>
          //   </div>
          // </nav> */


  )
}

export default Navigation
