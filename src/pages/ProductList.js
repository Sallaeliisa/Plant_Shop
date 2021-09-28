import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions/actions";
import ProductCard from "../containers/ProductCard";
import SingleProduct from "../containers/SingleProduct";
import SearchBar from "../components/SearchBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        Product added to cart
      </Popover.Body>
    </Popover>
  );

  const listedProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard
          id={product.id}
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          color={product.color}
          prize={product.prize}
          icon={<OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}><button onClick={() => dispatch(addProduct(product))}><FontAwesomeIcon icon={faCartPlus} /></button></OverlayTrigger>}
        />
      </div>
    );
  });

  return (
    <div>
      <Switch>
      <Route path="/products/:id">
          <SingleProduct />
        </Route>
      <Route path="/products" exact>
      <SearchBar />
      <div className="gridContainer">
        <div className="productCardList">{listedProducts}</div>
      </div>
      </Route>
      </Switch>
    </div>
  );
};

export default ProductList;