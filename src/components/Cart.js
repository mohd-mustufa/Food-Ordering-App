import { useDispatch, useSelector } from "react-redux";
import MenuItem, { EnhancedMenuItem } from "./MenuItem";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const CartItemMenu = EnhancedMenuItem(MenuItem);

  return (
    <div className="cart-main">
      <h1>Cart</h1>
      <button onClick={handleClearCart} className="clear-cart-btn style-btn">
        Clear Cart
      </button>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>
            Cart is empty, please add more items to the cart to proceed to
            checkout.
          </p>
        ) : (
          cartItems.map((item) => {
            return (
              <div key={item?.card?.info?.id}>
                <CartItemMenu item={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
