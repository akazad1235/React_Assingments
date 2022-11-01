import React, { useState } from 'react';

const Cart = (props) => {
    const {cart, handleRemoveCart, handleResetProduct} = props 

    return (
        <div>
            <div className="card-list">
            {
                    cart.map((cart)=>{
                        return <div>
                                <div className='d-flex justify-content-between border-bottom border-info p-2 align-items-center'>
                                    <img className='' style={{width: '50px'}} src={cart.picture} alt="" />
                                    <h5>{cart.name}</h5>
                                    <button className='btn btn-danger btn-sm' onClick={()=>handleRemoveCart(cart._id)}>Delete</button>
                                </div>
                        </div>
                    })
                }
            <div className='choose m-3'>
                <button className='btn btn-info m-2'>Choose One For Me</button>
                <button className='btn btn-danger' onClick={()=>handleResetProduct()}>Choose Again</button>
            </div>    
            </div>
        </div>
    );
};

export default Cart;