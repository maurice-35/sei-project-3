import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
import ProductCard from '../Popups/ProductCard'


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


      <h1 className="title text-monospace">Our Products</h1>

      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-overview">
            <h3>FOOD DESIGNED FOR YOUR CAT</h3>
            <p className="text-monospace text-center">
              For the love of cats 🐱
            </p>
          </div>
          <img src="https://www.webbox.co.uk/wp-content/uploads/2021/01/shutterstock_600977711.jpg" alt="Dog Food" />
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


      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-overview">
            <h3>FOOD DESIGNED FOR YOUR DOG</h3>
            <p className="text-monospace text-center">
              For the love of dogs 🐶
            </p>
          </div>
          <img src="https://canna-pet.com/wp-content/uploads/2019/02/dog-eating-1.jpg" alt="Dog Food" />
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


    </>
  )
}

export default Overview
