import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            products: [],
            loading: true
        }
        this.db = firebase.firestore();
    }

    componentDidMount()
    {
        // firebase
        //     .firestore()
        //     .collection('products')
        //     .get()
        //     .then((snapshot) =>
        //     {
        //         const products = snapshot.docs.map((doc) =>
        //         {
        //             const data=doc.data();
        //             data['id']=doc.id;
        //             return data;
        //         })
        //         this.setState({ 
        //            products,
        //            loading:false
        //         });
        //     });
        this.db
            .collection('products')
            .onSnapshot((snapshot) =>
            {
                /* this onsnapshot function is an event handler which is permanently attatched to the button.
                now when ever the button is clicked, new product will be added to the database and it will be
                shown to us synchronously in the front end. */
                const products = snapshot.docs.map((doc) =>
                {
                    const data = doc.data();
                    data['id'] = doc.id;
                    return data;
                })
                this.setState({
                    products,
                    loading: false
                });
            });

    }

    handleIncreaseQuantity = (product) =>
    {
        const { products } = this.state;
        const index_of_required_product = products.indexOf(product);

        // products[index_of_required_product].qty += 1;

        // this.setState({
        //     products
        // });
        
        const docRef=this.db.collection('products').doc(products[index_of_required_product].id);
        docRef.update({
            qty:products[index_of_required_product].qty+1
        })
        .then(()=>
        {
            console.log('Document updated successfully')
        })
        .catch((error)=>
        {
            if(error)
            {
                console.log('Error', error);
            }
        })
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

        // products[index_of_required_product].qty -= 1;

        // this.setState({
        //     products
        // })
        const docRef=this.db.collection('products').doc(products[index_of_required_product].id);
        docRef.update({
            qty:products[index_of_required_product].qty-1
        })
        .then(()=>
        {
            console.log('Document Updated Successfully!');
        })
        .catch((error)=>
        {
            console.log('There was an error in updating the document', error);
        })
    }



    handleDeleteProduct = (product) =>//We can also use filter to filter the array where the id is not eqaul to the target id (we would have passed the target id in the props and cartitem, would have returned it to us when we call the onDelete function.)
    {
        const { products } = this.state;
        const index_of_required_product = products.indexOf(product);

        // products.splice(index_of_required_product, 1);

        // this.setState({
        //     products
        // });

        const docRef=this.db.collection('products').doc(products[index_of_required_product].id);
        docRef.delete()
        .then(()=>
        {
            console.log('Document Deleted Successfully');
        })
        .catch((error)=>
        {
            console.log('Error in deleting the document!', error);
        })
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


    getCartTotal = () =>
    {
        const { products } = this.state;

        let total = 0;
        products.forEach((product) =>
        {
            total += product.qty * product.price;
        });
        return total;
    }

    addProduct = () =>
    {
        this.db
            .collection('products')
            .add({
                img:'',
                price:999,
                qty:3,
                title:'Washing Machine'
            })
            .then((NewDocRef)=>
            {
                console.log('Product has been added', NewDocRef);
            })
            .catch((error)=>
            {
                if(error)
                {
                    console.log('There was an error in getting data from db');
                }
            })
    }

    render()
    {
        const { products, loading } = this.state;
        return (
            <div className="App">
                <Navbar
                    count={this.getCartCount()}
                    addProduct={this.addProduct}
                />

                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleonDecreaseQuantity}
                    onDelete={this.handleDeleteProduct}
                />


                {loading && <div className="loader"></div>}


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
