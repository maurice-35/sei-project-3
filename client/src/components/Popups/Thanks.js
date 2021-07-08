import React from 'react'
import { Link } from 'react-router-dom'


const Thanks = () => {


  return (
    <>
      <div className="thanks">
        <div className="thank-msg">
          <h1>Thanks For Shopping!</h1>
          <Link to="/products"><p>Continue Shopping</p></Link>
        </div>
      </div>

    </>
  )
}

export default Thanks