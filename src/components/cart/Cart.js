import React, { useState } from 'react';
import './cart.css';
import CartItem from './cartItem/cartItem';



const Cart = (props) => {


    const addeds = props.addedItems;




    let sum = addeds.reduce((sum,e)=> sum + e.price,0);


    sum = sum.toFixed(2);



    return (
        <div className='cart col-md-4 text-center'>
            <h6>Order summery</h6>
            <div className="row">
                <div className="col">
                    <p>Item ordered: {props.addedItems.length}</p>
                </div>
            <div className="col">
                <p style={{textAlign:'right'}}>Total: {sum}</p>
            </div>
            </div>
            {
                addeds.map((e)=>(
                    <CartItem key={e.key} item={e} />
                ))
            }
            
        </div>
    );
};

export default Cart;