import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/helpers/auth'


const Profile = () => {
  const [pet, setPet] = useState([])
 

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile/pets', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPet(data) 
    }
    getData()
  }, [])

 
  return (
    <>
      <h1 className="pet-title text-monospace">PETS PETS PETS!</h1>
      <div className="background-color">
        <div className="form-container">
          
          <h1>No pets to display yet</h1>
          
          {pet.map(myPet => {
            return <div key={myPet._id}>
              <p className="animate__animated animate__flipInX text-monospace" ><span className="fw-bold text-decoration-underline">{myPet.name}</span></p>
              <p className="text-monospace text-start">Gender: <span className="fw-bold text-decoration-underline">{myPet.gender}</span></p>
              <p className="text-monospace text-start">Age: <span className="fw-bold text-decoration-underline">{myPet.age}</span> years old</p>
              <p className="text-monospace text-start">Breed: <span className="fw-bold text-decoration-underline">{myPet.breed}</span></p>
            </div>
          })}
      
        </div>
      </div>
    </>
  )
}

export default Profile