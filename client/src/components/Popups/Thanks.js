import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <>
      <h1>Thanks For Shopping!</h1>
      <Link to="/products"><p>Click here to shop more</p></Link>
    </>
  )
}

export default Thanks