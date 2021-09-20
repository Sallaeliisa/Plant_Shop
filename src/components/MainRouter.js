import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Products from "../pages/ProductList";
import Cart from "../pages/Cart";

const MainRouter = () => {
  const cart = useSelector((state) => state.cart);
  let count = 0;

  cart.map((item) => {
    count += item.quantity;
    console.log(count); 
  });

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({count})</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
