import React, { useState } from 'react';
import Product from '../product/product';
import './shop.css';
import data from './../../data/fakeData';
import Cart from '../cart/Cart';

const Shop = () => {

    const allProducts = data;

    let [item,setItem] = useState([]);
    
    const cartHandle = (e)=>{
        

        let finalItem = [...item, e];
        setItem(finalItem);
        
    
    }





    return (
        <div className='shop'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            {
                                allProducts.map(e=>(
                                    <Product key={e.key} products={e} cart={cartHandle} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart addedItems={item} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;