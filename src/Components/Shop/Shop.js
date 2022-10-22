import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeProduct.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className='row'>
            <div className="col-md-8">
                <div className='d-flex'>
                    <Product />
                </div>
            </div>
            <div className="col-md-4">
                <Cart />
            </div>
        </div>
    );
};

export default Shop;