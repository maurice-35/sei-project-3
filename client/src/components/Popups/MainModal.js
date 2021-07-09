import React, { useState } from 'react'
import nextId from 'react-id-generator'
import Modal from 'react-bootstrap/Modal'
import useLocalStorage from '../hooks/useLocalStorage'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { getTokenFromLocalStorage } from '../tokens/token'

const MainModal = ({ id, image, name, shortDescription, description, ingredient, storage, price, show, handleClose }) => {
  //* Show Modal Lists - Ingredients & Storage
  const [showIngred, setShowIngred] = useState(false)
  const [showStorage, setShowStorage] = useState(false)
  const [localStorageItem, setLocalStorageItem] = useLocalStorage('items', [])
  const history = useHistory()


  //? Open Ingredients List 
  const handleShowIngred = () => {
    setShowIngred(true)
  }

  //? Close Ingredients List
  const handleCloseIngred = () => {
    setShowIngred(false)
  }

  //? Open Storage List 
  const handleShowStorage = () => {
    setShowStorage(true)
  }

  //? Open Storage List
  const handleCloseStorage = () => {
    setShowStorage(false)
  }

  //* Add to basket
  const saveEventIDToLocalStorage = e => {
    if (!window.localStorage.getItem('token')) {
      console.log('your are not logged in')
      history.push('/login')
    } else {
      const newID = nextId()
      const newLocalStorageItems = [...localStorageItem, { name: e.target.name, price: e.target.value, id: e.target.id, itemId: newID }]
      setLocalStorageItem(newLocalStorageItems)
      toast.success('Item has been added to the basket ✅')
    }
  }




  return (
    <>
      <ToastContainer />
      <Modal key={id} show={show} onHide={handleClose}
        // dialogClassName="my-modal"
        size="lg">
        <div className="modal-body-prod text-monospace">
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{shortDescription}</p>
          <p>{description}</p>
          <hr />
          <div className="extra-info">
            <div className="header-extra">
              {/* {!showIngred && <button onClick={handleShowIngred}>+</button>} */}
              {!showIngred && <h2 onClick={handleShowIngred}>Ingredients +</h2>}
              {showIngred && <h2 onClick={handleCloseIngred}>Ingredients -</h2>}
            </div>
            {showIngred && <div className="extra-list">
              <ul>
                {ingredient.map(ingredient =>
                  <li key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </div>}
          </div>
          <hr className="dotted-hr" />
          <div className="extra-info">
            <div className="header-extra">

              {!showStorage && <h2 onClick={handleShowStorage}>Storage +</h2>}
              {showStorage && <h2 onClick={handleCloseStorage}>Storage -</h2>}
            </div>
            {showStorage && <div className="extra-list">
              <p>{storage}</p>
            </div>}
          </div>
          <hr />
          <div className="my-modal-footer">
            <div className="price">
              <i className="fas fa-tags"></i>
              <p>£ {price}</p>
            </div>
            <div className="right-btn">
              <button className="modal-button" onClick={handleClose}>
                Close
              </button>
              <button className="modal-button buy" id={id} name={name} value={price} onClick={saveEventIDToLocalStorage}>
                {/* <i className="fas fa-shopping-basket" ></i> */}
                Buy me
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default MainModal
