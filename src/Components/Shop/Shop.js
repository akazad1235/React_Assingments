import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeProduct.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])
    const handleAddToCart = (product)=>{
        let newCart = [...cart, product];
        setCart(newCart); 
      //  console.log(product);
    }
    const handleRemoveCart = (id)=>{
       let updateCart = cart.filter((cart) => {
            
           return cart._id !== id;
        })
        setCart(updateCart);
    }
    
    return (
        <div className='row m-1'>
            <div className="col-md-8">
                <div className="row">
                        {
                            products.map( product => <Product product={product} handleAddToCart={handleAddToCart}/> )
                        }
                </div>
            </div>
            <div className="col-md-4">
                <Cart cart={cart}  handleRemoveCart={handleRemoveCart}/>
            </div>
        </div>
    );
};

export default Shop;