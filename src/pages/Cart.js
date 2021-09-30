import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/actions/actions";
import CartCard from "../containers/CartCard";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const cartItems = cart.map((product) => {
    return (
      <div className="cart" key={product.id}>
          <img src={product.mainImg} alt='product'/>
          <p>{product.name}</p>
          <p>{product.color}</p>
          <button onClick={() => dispatch(removeProduct(product.id))}>-</button>
          {product.quantity}
          <button onClick={() => dispatch(addProduct(product))}>+</button>
          <p>{product.prize} €</p>
      </div>
    );
  });

  return (
    <div>
        <h1>Shopping cart</h1>
        <div className="productCardList">{cartItems}</div>
    </div>
  );
};

export default Cart;