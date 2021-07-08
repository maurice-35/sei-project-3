import React, { useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router'





const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)
  const [basketInfo, setBasketInfo] = useState([])
  const [subTotal, setSubtotal] = useState([])
  const history = useHistory()

  //* Show items in basket
  const handleBasketChange = () => {
    setSmShow(true)
    const items = localStorage.getItem('items')
    setBasketInfo(JSON.parse(items))
    calculateTotal()
  }

  //* Delete item from basket
  const handleDelete = (e) => {
    const userInput = e.target.id
    const getItem = JSON.parse(localStorage.getItem('items'))
    const newLocalStore = getItem.filter(ite => ite.itemId !== userInput)
    setBasketInfo(newLocalStore)
    window.localStorage.setItem('items',JSON.stringify(newLocalStore))
    calculateTotal()
    
  }


  //* Calculcate Totals
  const calculateTotal = () => {
    const items = localStorage.getItem('items')
    const parseThem = JSON.parse(items)
    const getNumbers = parseThem.map(ite => parseFloat(ite.price))
    const subTotalArray = getNumbers.reduce((a,b) => a + b ,0)
    setSubtotal(subTotalArray.toFixed(2))
  }

  //* Purchase and clear all items in basket
  const checkout = () => {
    const blank = []
    window.localStorage.setItem('items',JSON.stringify(blank))
    setBasketInfo(blank)
    calculateTotal()
    setSmShow(false)
    history.push('/thanks')
  }




  return (
    <>
      <Nav.Item><span>()</span></Nav.Item>
      <Nav.Link onClick={handleBasketChange}><i className="fas fa-shopping-bag"></i></Nav.Link>
      <Modal
        className="bg-transparent"
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <Image src="https://res.cloudinary.com/inetab/image/upload/v1625583602/logo_size_htxzty.jpg" />
            Your Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {basketInfo.map(info =>
            <>
              <div key={info.id} className="basket-item">
                <div className="item-info">
                  <p>{info.name}</p>
                  <i className="fas fa-tags">  {info.price}</i>
                </div>
                <button id={info.itemId} onClick={handleDelete}>x</button>
              </div>
              <hr />
            </>
          )}
          <div className="totals">
            <p>subtotal: <span className="subtotal">{subTotal}</span></p>
            <p>vat: 20%</p>
            <p>total: <span className="totalAmount">{((subTotal / 100) * (20 + 100)).toFixed(2)}</span></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={checkout} className="checkout">
            Checkout
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BasketModal