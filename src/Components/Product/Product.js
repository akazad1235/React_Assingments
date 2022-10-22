import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name, price, picture, id} = props.Product
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <img className='m-1' src={picture} alt="product image" />
                <div className='m-2'>
                    <h4>{name}</h4>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;