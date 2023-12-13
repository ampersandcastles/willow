// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './actions/cartActions.js';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.description}
                        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: product => { dispatch(removeFromCart(product)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);