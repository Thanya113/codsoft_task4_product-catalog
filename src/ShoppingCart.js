// src/ShoppingCart.js
import React from 'react';
import { ShoppingCartContainer, CartItem } from './ShoppingCartStyles';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <ShoppingCartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <p className="cart-item-details">
                {item.name} - ₹{item.price.toFixed(2)}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </CartItem>
          ))}
          <p className="cart-total">Total: ₹{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        </div>
      )}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
