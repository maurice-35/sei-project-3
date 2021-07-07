import React, { useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'



const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)

  return (
    <>
      <Nav.Item><span>()</span></Nav.Item>
      <Nav.Link onClick={() => setSmShow(true)}><i className="fas fa-shopping-bag"></i></Nav.Link>
      <Modal
        className="bg-transparent"
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <Image src="https://res.cloudinary.com/inetab/image/upload/v1625583602/logo_size_htxzty.jpg"/>
          Your Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Products will go in here</Modal.Body>
      </Modal>
    </>
  )
}

export default BasketModal