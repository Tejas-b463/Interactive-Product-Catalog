import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../redux/wishlistSlice";
import EmptyCart from "../page/Empty";
import "../styles/Cart.css";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const wishlistItems = useSelector((store) => store.wishlists.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart-summary" style={{ marginTop: "50px" }}>
        <div className="my-bag">
          <p className="bold">My Wishlist</p>(
          <p> {wishlistItems.length} items </p> )
        </div>
        <div className="clear-cart">
          <button className="clear-btn" onClick={handleClearCart}>
            Clear Wishlist
          </button>
        </div>
      </div>
      <div className="cart-container">
        <div className="product-summary-page">
          {wishlistItems.map((product) => (
            <div key={product.id} className="product-cart-main">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <div className="product-title">{product.title}</div>
                <div>{product.category}</div>
                <div> ${product.price.toFixed(2)}</div>
              </div>

              <div className="quantity-controls">
                <MdDelete
                  id="remove-btn"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </MdDelete>
              </div>
            </div>
          ))}
        </div>
        {wishlistItems.length === 0 ? <EmptyCart /> : ""}
      </div>
    </>
  );
};

export default CartPage;
