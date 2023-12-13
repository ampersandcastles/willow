// reducers.js - willowmecreations.com - Artisanal Yarn Shop
import productsInitialState from './products.js';

const initialState = {
  cart: [],
  products: productsInitialState,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add item to the cart
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // Remove item from the cart
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    // Clear the entire cart
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
