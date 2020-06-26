import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            products: [
                {
                    price: 1000,
                    title: 'Watch',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1592325876243-fb9685c789f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80',
                    id: 1
                },
                {
                    price: 15000,
                    title: 'Phone',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                    id: 2
                },
                {
                    price: 20000,
                    title: 'Television',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1572662073398-afd34ca1f866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                    id: 3
                },
                {
                    price: 25000,
                    title: 'Washing Machine',
                    qty: 0,
                    img: 'https://media.gettyimages.com/photos/the-place-where-linen-gets-cleaned-picture-id894344966?s=2048x2048',
                    id: 4
                },
                {
                    price: 500,
                    title: 'Earphones',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
                    id: 5
                },
                {
                    price: 1500,
                    title: 'Earpods',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1036&q=80',
                    id: 6
                },
                {
                    price: 40000,
                    title: 'Laptops',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                    id: 7
                },
                {
                    price: 40000,
                    title: 'Computer',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1590521383452-54e846f386fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80',
                    id: 8
                },
                {
                    price: 30000,
                    title: 'Air Conditioner',
                    qty: 0,
                    img: 'https://media.gettyimages.com/photos/air-conditioner-picture-id157482774?s=2048x2048',
                    id: 9
                },
                {
                    price: 30,
                    title: 'DVD/HDD Recorders',
                    qty: 0,
                    img: 'https://images.unsplash.com/photo-1573247374056-ba7c8c5ca4fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                    id: 10
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

        if (products[index_of_required_product].qty === 0)
        {
            window.alert("Quantity cant be negative!")
            return;
        }

        products[index_of_required_product].qty -= 1;

        this.setState({
            products
        })
    }



    handleDeleteProduct = (product) =>//We can also use filter to filter the array where the id is not eqaul to the target id (we would have passed the target id in the props and cartitem, would have returned it to us when we call the onDelete function.)
    {
        const { products } = this.state;
        const index_of_required_product = products.indexOf(product);

        products.splice(index_of_required_product, 1);

        this.setState({
            products
        });
    }



    getCartCount = () =>
    {
        const { products } = this.state;

        let count = 0;
        products.forEach((product) =>
        {
            count += product.qty;
        })
        return count;
    }


    getCartTotal=()=>
    {
        const {products}=this.state;

        let total=0;
        products.forEach((product)=>
        {
            total+=product.qty*product.price;
        });
        return total;
    }


    render()
    {
        const { products } = this.state;
        return (
            <div className="App">
                <Navbar
                    count={this.getCartCount()}
                />

                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleonDecreaseQuantity}
                    onDelete={this.handleDeleteProduct}
                />
                <div className="total-price-container">
                    <h3 className="total-price-heading">
                       Total: {this.getCartTotal()} <i>Rupees</i>
                    </h3>
                </div>
            </div>
        );
    }

};

export default App;
