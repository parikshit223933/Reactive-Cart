import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: 0,
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: 0,
                    id: 2
                },
                {
                    price: 449,
                    title: 'Television',
                    qty: 1,
                    img: 0,
                    id: 3
                },
            ]
        }
    }
    handleIncreaseQuantity = (product) =>
    {
        const { products } = this.state;
        const index_of_required_product = products.indexOf(product);

        products[index_of_required_product].qty += 1;

        this.setState({
            products
        });
    }
    handleonDecreaseQuantity = (product) =>
    {
        const { products } = this.state;
        const index_of_required_product = products.indexOf(product);

        if (products[index_of_required_product].qty == 1)
        {
            window.alert("You can't reduce the quantity below 1, If you want to delete the product, just click on the delete button!")
            return;
        }
            

        products[index_of_required_product].qty -= 1;

        this.setState({
            products
        })
    }
    render()
    {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) =>
                {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleonDecreaseQuantity}
                        />
                    );
                })}
            </div>
        );
    }
};

export default Cart;