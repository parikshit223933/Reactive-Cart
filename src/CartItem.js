import React from 'react';

class CartItem extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        /* this.increaseQuantity=this.increaseQuantity.bind(this); */
    }
    increaseQuantity = () =>/* arrow functions bind the balue of "this" of the function to the respective class. */
    {
        // this.state.qty++;
        console.log(this.state);
        // set state form 1
        /* this.setState(
            {
                qty:this.state.qty+1
            }
        ) */

        // set state form 2. it is used when the previous state is required.
        this.setState((previousState)=>
        {
            return {
                qty:previousState.qty+1
            }
        })
    }
    render()
    {
        const { price, title, qty } = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        {title}
                    </div>
                    <div style={{ color: 'grey' }}>
                        Rs. {price}
                    </div>
                    <div style={{ color: 'grey' }}>
                        Quantity: {qty} {this.state.qty==1?'Unit':'Units'}
                    </div>
                    <div className="cart-item-actions">
                        <div onClick={this.increaseQuantity}><i className="action-icons fas fa-trash-alt" ></i></div>
                        <div onClick={this.increaseQuantity}><i className="action-icons fas fa-plus-square" ></i></div>
                        <div onClick={this.increaseQuantity}><i className="action-icons fas fa-minus-square"></i></div>
                    </div>
                </div>
            </div>
        );
    }
};
/* our class CartItem will inherit features from the class React.Component. extends indicates
inheritance in javascript */
const styles =
{
    image:
    {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'orangered'
    }
}
export default CartItem;