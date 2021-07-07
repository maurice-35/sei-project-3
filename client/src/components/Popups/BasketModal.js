import React, { useState } from 'react'
import { Modal, Image, Nav } from 'react-bootstrap'
import axios from 'axios'



const BasketModal = () => {
  const [smShow, setSmShow] = useState(false)

  const [basketInfo, setBasketInfo] = useState([])

  const handleBasketChange = async () => {
    setSmShow(true)
    try {
      const { data } = await axios.get('/api/profile', { headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` } })

      const filterNull = data.basket.filter(info => info.name)
      console.log('FILTERNULL', filterNull)

      setBasketInfo(filterNull)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(basketInfo)

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
            {basketInfo.map(info => <li key={info._id}>{info.name}</li>)}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default BasketModal