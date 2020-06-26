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

        if (products[index_of_required_product].qty === 1)
        {
            window.alert("You can't reduce the quantity below 1, If you want to delete the product, just click on the delete button!")
            return;
        }

        products[index_of_required_product].qty -= 1;

        this.setState({
            products
        })
    }
    handleDeleteProduct=(product)=>//We can also use filter to filter the array where the id is not eqaul to the target id (we would have passed the target id in the props and cartitem, would have returned it to us when we call the onDelete function.)
    {
        const {products}=this.state;
        const index_of_required_product=products.indexOf(product);

        products.splice(index_of_required_product, 1);

        this.setState({
            products
        });
    }
    getCartCount=()=>
    {
        const {products}=this.state;

        let count=0;
        products.forEach((product)=>
        {
            count+=product.qty;
        })
        return count;
    }
    render()
    {
        const {products}=this.state;
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
            </div>
        );
    }

};

export default App;
