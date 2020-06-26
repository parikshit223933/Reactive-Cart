import React from 'react';

const Navbar=(props) =>
{
    console.log(props)
    return (
        <div className='navbar' style={{ backgroundColor: 'black' }}>
            <div className="cart-icon-container">
                <button>
                    <i className="fas fa-shopping-cart" style={{ color: 'white' }}></i>
                    <span style={{ color: 'white' }}>3</span>
                </button>

            </div>
        </div>
    )
}


export default Navbar;