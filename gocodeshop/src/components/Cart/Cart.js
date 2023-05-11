import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

const Cart = () => {
  const {cart} = useContext(MyContext)
  return (
    <div>
      {cart.map(cartProduct =><><p>{cartProduct.title}</p> <p>{cartProduct.price}$</p> </> )}
    </div>
  )
}

export default Cart