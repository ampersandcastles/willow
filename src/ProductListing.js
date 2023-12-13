import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import products from './products.js';

const ProductListing = ({ addToCart }) => {
  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.description}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => { dispatch(addToCart(product)) }
  };
};

export default connect(null, mapDispatchToProps)(ProductListing);