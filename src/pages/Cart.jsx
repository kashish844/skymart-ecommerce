import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'
import CartItem from './CartItem';

const Cart = () => {
  let{cartItems,toggle} = useContext(MyStore);
  return (
    <CartItem cartItems={cartItems}/>
  )
}

export default Cart