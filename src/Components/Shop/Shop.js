import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    return (
        <div className='d-flex justify-content-between m-3'>
            <Product />
            <Cart />
        </div>
    );
};

export default Shop;