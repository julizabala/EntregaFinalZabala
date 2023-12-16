import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

const CartWidgetComponent = () => {

  const {state} = useContext(CartContext)
  return (
    <div>
        <span><FontAwesomeIcon icon={faCartShopping} style={{fontSize: "25px"}}/></span>
        <span style={{fontSize: "20px"}}>{state}</span>
    </div>
    
  )
}

export default CartWidgetComponent;