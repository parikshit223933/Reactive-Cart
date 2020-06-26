import React from 'react';

const Navbar = (props) =>
{
    console.log(props.count)
    return (
        <div className='navbar' style={{ backgroundColor: 'black' }}>
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