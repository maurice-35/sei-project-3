import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Dogs = () => {

  //* Dog Products 
  const [meal, setMeal] = useState([])
  const [treats, setTreats] = useState([])

  //* Fetch Dog Products lol
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        const dogProducts = data.filter(animal => animal.typeAnimal === 'dog')
        const dogTreats = dogProducts.filter(food => food.typeProduct === 'treat')
        const dogMeal = dogProducts.filter(food => food.typeProduct === 'meal')
        setTreats(dogTreats)
        setMeal(dogMeal)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  console.log(meal)
  console.log(treats)

  return (
    <>
      <h1>Dogs Stuff</h1>
      <div className="dog-wrapper">
        <div className="main-dog">
          {meal.map(food =>
            <Card key={food._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>
                  {food.shortDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}

export default Dogs