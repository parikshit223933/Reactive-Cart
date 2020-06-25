import React from 'react';

class CartItem extends React.Component
{
    render()
    {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>
                        Item
                    </div>
                    <div style={{color:'grey'}}>
                        Price
                    </div>
                    <div style={{color:'grey'}}>
                        Quantity
                    </div>
                    <div className="cart-item-actions">
                        {/* all the cart items */}

                    </div> 
                </div>
            </div>
        );
    }
};
/* our class CartItem will inherit features from the class React.Component. extends indicates
inheritance in javascript */
const styles=
{
    image:
    {
        height:100,
        width:110,
        borderRadius:4,
        backgroundColor:'orangered'
    }
}
export default CartItem;