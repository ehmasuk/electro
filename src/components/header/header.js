import React from 'react';
import logo from './../../data/images/Screenshot_2.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src={logo} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8 navs">
                        <a href="#home">Home</a>
                        <a href="#shop">Shop</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;