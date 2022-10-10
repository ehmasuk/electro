import React, { useState } from 'react';
import './product.css';
import { FaCartPlus } from "react-icons/fa";


const Product = (props) => {


    const {img,name,price,category} = props.products;


    const cart = props.cart;


    
    return (
            <div className="col-lg-5 col-md-6 mt-4">
                <div className="card">
                    <p className='cat'>{category}</p>
                    <h6>{name}</h6>
                    <img src={img} alt="" className="img-fluid mb-5" />
                    <div className="row align-items-center">
                        <div className="col">
                            <p className="lead">${price}</p>
                        </div>
                        <div style={{textAlign:'right'}} className="col">
                            <p onClick={()=>cart(props.products)} className='hola'><FaCartPlus className='cart-icon'></FaCartPlus></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Product;