import React from 'react'

const Modal = () => {
  return (
    <>
      <Modal key={prod._id} show={show} onHide={handleClose}
        // dialogClassName="my-modal"
        size="lg">
        <div className="modal-body-prod">
          <img src={prod.image} alt={prod.name} />
          <h1>{prod.name}</h1>
          <p>{prod.shortDescription}</p>
          <p>{prod.description}</p>
          <hr />
          <div className="extra-info">
            <div className="header-extra">
              <h2>Ingredients</h2>
              {/* {!showIngred && <button onClick={handleShowIngred}>+</button>} */}
              {!showIngred && <i onClick={handleShowIngred} className="fas fa-plus"></i>}
              {showIngred && <i onClick={handleCloseIngred} className="fas fa-minus"></i>}
            </div>
            {showIngred && <div className="extra-list">
              <ul>
                {prod.ingredient.map(ingredient =>
                  <li key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </div>}
          </div>
          <hr className="dotted-hr" />
          <div className="extra-info">
            <div className="header-extra">
              <h2>Storage</h2>
              {!showStorage && <i onClick={handleShowStorage} className="fas fa-plus"></i>}
              {showStorage && <i onClick={handleCloseStorage} className="fas fa-minus"></i>}
            </div>
            {showStorage && <div className="extra-list">
              <p>{prod.storage}</p>
            </div>}
          </div>
          <hr />
          <div className="my-modal-footer">
            <div className="price">
              <i className="fas fa-tags"></i>
              <p>£ {prod.price}</p>
            </div>
            <div className="right-btn">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                <i className="fas fa-shopping-basket"></i>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Modal
