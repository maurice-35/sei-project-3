import React from 'react'

const ProductCard = ({ id, name, image, shortDescription, openModal }) => {
  return (
    <>
      <div key={id} className="dog-card">
        <img src={image} alt={name} />
        <div className="dog-card-body">
          <div className="dog-card-header">
            <h3 className="fw-bold">{name}</h3>
          </div>
          <hr />
          <div className="dog-card-description">
            <p>{shortDescription}</p>
          </div>
        </div>
        <footer className="dog-card-footer">
          <i className="fas fa-paw" onClick={openModal} id={id}></i>
        </footer>
      </div>
    </>
  )
}

export default ProductCard
