import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ProductLogin = () => {

  //* Product State
  const [products, setProducts] = useState([])

  //* Modal States & Functions
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  //* Show Modal Lists - Ingredients & Storage
  const [showIngred, setShowIngred] = useState(false)
  const [showStorage, setShowStorage] = useState(false)


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    getData()
  }, [])

  //? Open Modal
  const openModal = e => {
    const userInput = e.target.id
    const filterArray = products.filter(prod => userInput === prod._id)
    setModalInfo(filterArray)
    setShow(true)
  }

  //? Open Ingredients List 
  const handleIngred = () => {
    setShowIngred(true)
  }

  //? Open Ingredients List 
  const handleStorage = () => {
    setShowStorage(true)
  }

  


  return (
    <>
      {/* MODAL-SIDEBAR */}
      {modalInfo.map(prod =>
        <>
          <Modal key={prod._id} show={show} onHide={handleClose}
            // dialogClassName="my-modal"
            size="lg"
          >

            <Modal.Header closeButton>
              <Modal.Title>{prod.name}</Modal.Title>
            </Modal.Header>

            <div className="modal-body-prod">
              <img src={prod.image} alt={prod.name} />
              <p>{prod.shortDescription}</p>
              <p>{prod.description}</p>
            </div>
            <div className="ingredients">
              <h2 onClick={handleIngred}>Ingredients - </h2>

              {showIngred && <div className="ing-list">
                <ul>
                  {prod.ingredient.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                  )}
                </ul>
              </div>}

              <div className="storage">
                <h2 onClick={handleStorage}>Storage - </h2>
                {showStorage && <div className="storage-list">
                  {prod.storage}
                </div>}
              </div>

            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                <i className="fas fa-shopping-basket"></i>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}



      {/* CARD WRAPPER */}
      <div className="products">
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
                  <button onClick={openModal} id={prod._id} >See Info</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductLogin
