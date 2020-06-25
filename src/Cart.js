import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            products:[
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 0,
                id:1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 0,
                id:2
            },
            {
                price: 449,
                title: 'Television',
                qty: 1,
                img: 0,
                id:3
            },
        ]
        }
    }
    render()
    {
        const {products}=this.state;
        return (
            <div className="cart">
                {products.map((product)=>
                {
                    return (
                    <CartItem 
                    product={product}
                    key={product.id}
                    />
                    );
                })}
            </div>
        );
    }
};

export default Cart;