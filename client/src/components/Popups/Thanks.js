import React from 'react'
import { Link } from 'react-router-dom'


const Thanks = () => {


  return (
    <>
      <div className="thanks-page">
        <div className="thanks">
          <h1 id="header-thanks">Thanks For Shopping!</h1>
          <Link to="/products"><p id="continue">Continue Shopping...</p></Link>
        </div>
      </div>
      <img className="party" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1625766285/pets-3715733_f2m663.jpg" alt="dog and pet party" />
    </>
  )
}

export default Thanks