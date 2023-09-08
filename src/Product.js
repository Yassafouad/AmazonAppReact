import React from 'react'
import { BsFillStarFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import useStateValue from "./StateProvider"
function Product(props) {
    const [{ basket }, dispatch] = useStateValue()
    const product = props.product;
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                rating: product.rating
            }
        })
    }
    return (
        <div className='theProduct'>
            <Link to={"/products/" + product.id}>
                <img src={product.image} alt="" width="100%" height="150px" />
                <h3>{product.title}</h3>
                <div >
                    {Array(product.rating).fill().map((_, i) => (
                        <BsFillStarFill />
                    ))}
                </div>
                <p>${product.price}</p>
            </Link>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product