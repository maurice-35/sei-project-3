import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
import ProductCard from '../Popups/ProductCard'
import { Link } from 'react-router-dom'



const Overview = () => {
  //* Cat and Dog State
  const [catProducts, setCatProducts] = useState([])
  const [dogProducts, setDogProducts] = useState([])
  const [products, setProducts] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')

        // displayed data 
        const onDisplay = data.filter(item => item.onDisplay)
        setProducts(onDisplay)
        // cat data
        const catItems = onDisplay.filter(animal => animal.typeAnimal.toLowerCase() === 'cat')
        setCatProducts(catItems)

        // dog data
        const dogItems = onDisplay.filter(animal => animal.typeAnimal.toLowerCase() === 'dog')
        setDogProducts(dogItems)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  //* Open Modal
  const openModal = e => {
    const userInput = e.target.id
    const filterArray = products.filter(prod => userInput === prod._id)
    setModalInfo(filterArray)
    setShow(true)
  }




  return (
    <>
      {/* Product Info Modal */}

      {modalInfo.map(info =>
        <MainModal
          show={show}
          handleClose={handleClose}
          key={info._id}
          name={info.name}
          image={info.image}
          shortDescription={info.shortDescription}
          description={info.description}
          ingredient={info.ingredient}
          storage={info.storage}
          id={info._id}
          price={info.price}
        // localStorageItem={localStorageItem}
        // setLocalStorageItem={setLocalStorageItem}
        />)}

      <div className="cat-page cat-section">
        <h1 className="title">Our Products</h1>

        <div className="dog-wrapper">
          <div className="meals-hero">
            <div className="hero-overview">
              <h3>FOOD DESIGNED FOR YOUR <Link to="/cats"><span className="cat-link">CAT</span></Link></h3>
              <p className="text-monospace text-center">
                For the love of cats 🐱
              </p>
            </div>
            <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1625768466/shutterstock_600977711_qjwbcb.jpg" alt="Dog Food" />
          </div>
        </div>

        <h3 className="overview-title text-monospace">CATS</h3>

        <div className="dog-wrapper">
          <div className="dog-meal">
            {catProducts.map(food =>
              <ProductCard
                key={food._id}
                name={food.name}
                image={food.image}
                id={food._id}
                shortDescription={food.shortDescription}
                openModal={openModal}
              />
            )}
          </div>
        </div>
      </div>

      <div className="navy-banner">
      </div>

      <div className="dog-page dog-section">
        <div className="dog-wrapper">
          <div className="meals-hero">
            <div className="hero-overview">
              <h3>FOOD DESIGNED FOR YOUR <Link to="/dogs"><span className="dog-link">DOG</span></Link></h3>
              <p className="text-monospace text-center">
                For the love of dogs 🐶
              </p>
            </div>
            <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1625768491/dog-eating-1_mekycw.jpg" alt="Dog Food" />
          </div>
        </div>

        <h3 className="overview-title text-monospace">DOGS</h3>
        <div className="dog-wrapper">
          <div className="dog-meal">
            {dogProducts.map(food =>
              <ProductCard
                key={food._id}
                name={food.name}
                image={food.image}
                id={food._id}
                shortDescription={food.shortDescription}
                openModal={openModal}
              />
            )}
          </div>
        </div>

      </div>



    </>
  )
}

export default Overview
