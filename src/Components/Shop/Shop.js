import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeProduct.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])

    return (
        <div className='row m-1'>
            <div className="col-md-8">
                <div className="row">
                        {
                            products.map( product => <Product Product={product} /> )
                        }
                </div>
            </div>
            <div className="col-md-4">
                <Cart />
            </div>
        </div>
    );
};

export default Shop;