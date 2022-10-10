import React from 'react';
import './cartItem.css'

const CartItem = (props) => {
    return (
        <div className='cart-item'>
            <div className="row align-items-center justify-content-between">
                <div className="col">
                    <img style={{border:'1px solid rgb(202 202 202 / 45%)'}} src={props.item.img} alt="" className="img-fluid" />
                </div>
                <div className="col">
                    <p>${props.item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;