import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

const ProductLogin = ( { name, ...props } ) => {

  //* Product State
  const [products, setProducts] = useState([])

  //* Sidebar States & Functions
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    getData()
  }, [])



  return (
    <>
      {/* MODAL-SIDEBAR */}
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


      {/* CARD WRAPPER */}
      <div className="wrapper">
        {products.map(prod =>
          //* CARD
          <div key={prod._id} className="card">
            <div className="image">
              <img src={prod.image} alt={prod.name} />
            </div>
            <div className="card-title">
              <h2>{prod.name}</h2>
            </div>
            <div className="card-descript">
              <p>{prod.shortDescription}</p>
            </div>
            <div className="card-icons">
              <div className="left-icons">
                <i className="fas fa-fish"></i>
                <i className="fas fa-carrot"></i>
                <i className="fas fa-egg"></i>
              </div>
              <div className="right-icon">
                <button><i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductLogin
