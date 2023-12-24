// src/ShoppingCartStyles.js
import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-left: 2px solid #333;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow-y: auto;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .cart-item-details {
    margin: 0;
  }

  button {
    background-color: #ff4444;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 10px;

    &:hover {
      background-color: #cc0000;
    }
  }

  .cart-total {
    font-weight: bold;
    margin-top: 20px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
