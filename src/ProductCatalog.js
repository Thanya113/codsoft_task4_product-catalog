// src/ProductCatalog.js
import React, { useState } from 'react';
import {
  AppContainer,
  ContentContainer,
  ProductListContainer,
  ProductCard,
  ProductImage,
  AddToCartButton,
  ShoppingCartContainer,
} from './ProductStyles';
import ShoppingCart from './ShoppingCart';

const products = [
  { id: 1, name: 'The Art Of Being Alone', price: 250.00, image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31D8VVlAOnL.jpg' },
  { id: 2, name: 'Think Like A Monk', price: 342.00, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600432716i/51942513.jpg' },
  { id: 3, name: 'The Secret', price: 144.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FNUk36Ikak0HJVtkYUmgAxae9XnMz-8MiA&usqp=CAU' },
  { id: 4, name: 'It Ends With Us', price: 311.00, image: 'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY445_SX342_.jpg' },
  { id: 5, name: 'Power Of Your Subconcious Mind', price: 99.00, image: 'https://m.media-amazon.com/images/I/51QTTApN-XL._SY445_SX342_.jpg' },
  { id: 6, name: 'The Lonely City', price: 413.00, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkmPDMZccbPSvqWsSlXB8ykci_RYFqbJZKLAgBSSMrAepjqzZb5gHaLJVWqAr55pxVSE0LQGSVCUZeJXBNQPN354g387MdviRU2kWIRVa5&usqp=CAE' },
  { id: 7, name: 'Ikigai', price: 374.00, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9IIwxRCF30iIAzRQrwIAD976Cx6PNC4A0fHnT1K7KC8H0Wnbtz5FlGqIzrzJhIcNBgQicEs_cXbNQw0e3htvuDRjgVRn2_M1jcxbAj1F8U67x5jvSKpngLg&usqp=CAE' },
  { id: 8, name: 'Atomic Habits', price: 180.00, image: 'https://rukminim2.flixcart.com/image/416/416/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70' },// Add more products as needed
];

function ProductCatalog() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <AppContainer>
      <h2>Online Book Shop</h2>
      <ContentContainer>
    
        <ProductListContainer>
          {products.map(product => (
            <center>
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price.toFixed(2)}</p>
              <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
            </ProductCard>
            </center>
          ))}
        </ProductListContainer>
        
        <ShoppingCartContainer>
          <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </ShoppingCartContainer>
      </ContentContainer>
    </AppContainer>
  );
}

export default ProductCatalog;
