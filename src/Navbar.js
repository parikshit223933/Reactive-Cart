import React from 'react';

const Navbar = (props) =>
{
    return (
        <div className='navbar' style={{ backgroundColor: 'black' }}>
            <div style={{color:'#ff0072'}}>
                <h1>Reactive Cart</h1>
            </div>
            {/* <div className="add-product-button">
                <button onClick={props.addProduct}>Add a Product</button>
            </div> */}
            <div className="cart-icon-container">
                <button>
                    <i className="fas fa-shopping-cart" style={{ color: 'white' }}></i>
                    {props.count>0?(<span style={{ color: 'white' }}>{props.count}</span>):''}
                </button>
            </div>
        </div>
    )
}


export default Navbar;