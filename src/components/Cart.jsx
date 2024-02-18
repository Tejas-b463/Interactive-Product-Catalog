import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../redux/productSlice";
import EmptyCart from "../page/Empty";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const CartPage = () => {
  const cartItems = useSelector((store) => store.products.items);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({});

  const handleClearCart = () => {
    dispatch(clearCart());
    setQuantities({});
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, product) => {
        const itemTotal = product.price * (quantities[product.id] || 1);
        return total + itemTotal;
      }, 0)
      .toFixed(2);
  };

  const updateQuantity = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <>
      <div className="cart-summary" style={{ marginTop: "50px" }}>
        <div className="my-bag">
          <p className="bold">My Bag</p>(<p>{cartItems.length} items</p>)
        </div>
        <div className="clear-cart">
          <button className="clear-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <div className="cart-container">
        <div className="product-summary-page">
          {cartItems.map((product) => (
            <div key={product.id} className="product-cart-main">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                {/* <div className="product-title">{product.title}</div> */}
                <div>{product.category}</div>
                <div>Price: ${product.price.toFixed(2)}</div>
              </div>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      (quantities[product.id] || 1) - 1
                    )
                  }
                >
                  -
                </button>
                <span className="quantity">{quantities[product.id] || 1}</span>
                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      (quantities[product.id] || 1) + 1
                    )
                  }
                >
                  +
                </button>
                <button
                  id="remove-btn"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="check-out">
            <h3>Order Details</h3>
            <div className="place-order">
              <div className="total-price">
                <div>Bag Total </div>
                <div> Convenience Fee </div>
                <div>Delivery Fee </div>
                <div className="order">Order Total</div>
              </div>
              <div className="total-price-dollar">
                <div>${calculateTotalPrice()}</div>
                <div>$0</div>
                <div>Free</div>
                <div className="order">${calculateTotalPrice()}</div>
              </div>
            </div>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/stepper"
              className="checkout-button"
            >
              PROCEED TO SHIPPING
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
