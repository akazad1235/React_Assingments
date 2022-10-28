import React from 'react';

const Cart = (props) => {
   
    const{cart} = props 
  //  console.log(typeof(props.product));
    return (
        <div>
            <div className="card-list">
            {
                    cart.map((cart)=>{
                        return <div>
                                <div className='d-flex justify-content-between border-bottom border-info p-2 align-items-center'>
                                    <img className='' style={{width: '50px'}} src={cart.picture} alt="" />
                                    <h5>{cart.name}</h5>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default Cart;