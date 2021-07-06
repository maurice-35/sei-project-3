import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Overview = () => {
  //* Cat and Dog State
  const [catProducts, setCatProducts] = useState([])
  const [dogProducts, setDogProducts] = useState([])


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        console.log('DATA ->', data)

        // displayed data 
        const onDisplay = data.filter(item => item.onDisplay)
        console.log(onDisplay)
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

  console.log('CAT ->', catProducts)
  console.log('DOG ->', dogProducts)


  return (
    <>
      <h1 className="overview-title">Our Products</h1>
      <div className="d-flex cats-overview">
        <div className="center">
          <h2 className="text-monospace text-center">FOOD DESIGNED FOR YOUR CAT</h2>
          <p className="text-monospace text-center">
            For the love of cats 🐱
          </p>
        </div>
        <div className="flex">
          <img src="https://www.webbox.co.uk/wp-content/uploads/2021/01/shutterstock_600977711.jpg" className="img-fluid rounded" alt="dog and cat images" />
        </div>
      </div>

      <h3 className="overview-title">CATS</h3>

      <div className="products dogs-overview">
        {catProducts.map(ite =>
          <div key={ite._id} className="card">
            <div className="image">
              <img src={ite.image} alt={ite.name} />
            </div>
            <div>
              <h2 className="card-title">{ite.name}</h2>
            </div>
            <div className="card-descript">
              <p>{ite.shortDescription}</p>
            </div>
            <div className="card-icons">
              <div className="left-icons">
                <i className="fas fa-fish"></i>
                <i className="fas fa-carrot"></i>
                <i className="fas fa-egg"></i>
              </div>
              <div className="right-icons">
                <button id={ite._id} >See Info</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex">
        <div className="flex">
          <img src="https://canna-pet.com/wp-content/uploads/2019/02/dog-eating-1.jpg" className="img-fluid rounded" alt="dog and cat images" />
        </div>
        <div className=" center">
          <h2 className="text-monospace text-center">FOOD DESIGNED FOR YOUR DOG</h2>
          <p className="text-monospace text-center">
            For the love of dogs 🐶
          </p>
        </div>
      </div>

      <h3 className="overview-title">DOGS</h3>

      <div className="products">
        {dogProducts.map(ite =>
          <div key={ite._id} className="card">
            <div className="image">
              <img src={ite.image} alt={ite.name} />
            </div>
            <div>
              <h2 className="card-title">{ite.name}</h2>
            </div>
            <div className="card-descript">
              <p>{ite.shortDescription}</p>
            </div>
            <div className="card-icons">
              <div className="left-icons">
                <i className="fas fa-fish"></i>
                <i className="fas fa-carrot"></i>
                <i className="fas fa-egg"></i>
              </div>
              <div className="right-icons">
                <button id={ite._id} >See Info</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Overview
