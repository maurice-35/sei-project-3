import React, { useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'




const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)
  const [ basketInfo, setBasketInfo] = useState([])
  
  const handleBasketChange = () => {
    setSmShow(true)
    const items = localStorage.getItem('item')
    setBasketInfo(JSON.parse(items))
  }
  const handleDelete = (e) => {
    const userInput = e.target.id
    const getItem = JSON.parse(localStorage.getItem('item'))
    const newLocalStore = getItem.filter(ite =>  ite.basket !== userInput)
    console.log(newLocalStore)
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
        <Modal.Body>Products will go in here
          <ul>
            {basketInfo.map(info => 
              <div  key={info._id}>
                <li>{info.name} - £{info.price}</li>
                <button id={info._id} onClick={handleDelete}>x</button>
              </div>)}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default BasketModal