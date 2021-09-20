import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions/actions";
import CartCard from "../containers/CartCard";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const cartItems = cart.map((product) => {
    return (
      <div key={product.id}>
        <CartCard
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          color={product.color}
          prize={product.prize}
          removeBtn={<button>-</button>}
          quantity={product.quantity}
          addBtn={<button onClick={() => dispatch(addProduct(product))}>+</button>}
        />
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