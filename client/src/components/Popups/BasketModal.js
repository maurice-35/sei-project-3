import React, { useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'




const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)
  const [basketInfo, setBasketInfo] = useState([])

  const handleBasketChange = () => {
    setSmShow(true)
    const items = localStorage.getItem('items')
    setBasketInfo(JSON.parse(items))
  }

  console.log(basketInfo)

  const handleDelete = (e) => {
    const userInput = e.target.id
    console.log(userInput)
    const getItem = JSON.parse(localStorage.getItem('items'))
    // console.log(index)
    console.log('before',getItem)
    const newLocalStore = getItem.filter(ite => ite.itemId !== userInput)
    setBasketInfo(newLocalStore)
    window.localStorage.setItem('items',JSON.stringify(newLocalStore))
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
        </Modal.Body>
        <Modal.Footer>
          <button className="checkout">
            Checkout
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BasketModal