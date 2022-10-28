import React from 'react';
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-brands-svg-icons'
import 'font-awesome/css/font-awesome.min.css';


const Product = (props) => {
    const{product, handleAddToCart} = props
    const{name, price, picture, id} = product
    const handleCart = (product) => {
        handleAddToCart(product)
    }
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <img className='m-1' src={picture} alt="product image" />
                <div className='m-2'>
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <button className='btn btn-warning btn-sm w-100' onClick={()=>handleCart(product)}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;