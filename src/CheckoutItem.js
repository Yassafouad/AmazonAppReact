import React from 'react'
import { BsFillStarFill } from "react-icons/bs"
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function CheckoutItem({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    })
  }
  return (
    <div className='checkoutItem'>
      <Link to={`/products/${id}`} >
        <img src={image} alt="" width="200px" height="150px" />
      </Link>
      <div>
        <Link to={`/products/${id}`} >
          <h3>{title}</h3>
          <p>${price}</p>
          <div>
            {Array(rating).fill().map((_, i) => (
              <BsFillStarFill />
            ))}
          </div>
        </Link>
        <button onClick={removeFromBasket}>remove</button>
      </div>
    </div>
  )
}

export default CheckoutItem