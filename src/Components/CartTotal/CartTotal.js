import React from 'react';
import './CartTotal.css'

const CartTotal = (props) => {
    const {carts}  =props;
    let total = 0;
    for(const amount of carts){
        total = total + amount.level;
    }
    return (
        <div>
             <h3><i class="fas fa-shopping-cart"></i> Total Selected: {props.carts.length}</h3>
                <h3><i class="fas fa-money-check-alt"></i> Level status: {total} </h3>
        </div>
    );
};

export default CartTotal;