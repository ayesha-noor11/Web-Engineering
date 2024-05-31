import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Pant', price: 15.00,image:"data:image/jpeg;base64,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" },
 
  { id: 2, name: 'Shirt', price: 10.99, image:"data:image/jpeg;base64,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"}
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            cartItems={cartItems} 
          />
        ))}
      </div>
      <Cart cartItems={cartItems} totalPrice={totalPrice} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
}

function Product({ product, addToCart, cartItems }) {
  const isAdded = cartItems.some(item => item.id === product.id); 

  return (
    <div className="product">
      <img src={product.image} alt={product.name} width={50} height={50} />
      <h4>{product.name}</h4>
      <span><h4>Price: ${product.price.toFixed(2)}</h4></span>
      <button
        onClick={() => addToCart(product)}
        disabled={isAdded} 
      >
        {isAdded ? 'Added to the Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

function Cart({ cartItems, totalPrice, updateQuantity, removeItem }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-quantity">
                <button className='sub-quantity-button' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} />
                <button className='add-quantity-button' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </span>
              <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <button className="cart-item-remove" onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Total: </span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default App;
