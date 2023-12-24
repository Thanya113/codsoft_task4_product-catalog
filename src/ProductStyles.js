// src/ProductStyles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 80%; /* Adjust the max-width as needed */
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 30px;
  margin: 10px;
  max-width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  max-height: 150px; /* Adjust this value based on your preference */
`;

export const AddToCartButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #45a049;
  }
`;

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
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
