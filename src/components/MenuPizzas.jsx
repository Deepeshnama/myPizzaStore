import React from 'react'

const MenuPizzas = ({item}) => {
  return (
    <>
      <div className="col-sm-6 col-md-9">
        <div className="text-lg-start">
          <h4 className="fw-bold">{item.name} </h4>
          <p>{item.description} </p>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <h4 className="text-warning fw-bold"> ₹ {item.price} </h4>
      </div>
    </>
  )
}

export default MenuPizzas