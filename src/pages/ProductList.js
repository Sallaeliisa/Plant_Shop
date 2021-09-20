import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions/actions";
import ProductCard from "../containers/ProductCard";
import ProductNav from "../components/ProductNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const listedProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          color={product.color}
          prize={product.prize}
          icon={<button onClick={() => dispatch(addProduct(product))}><FontAwesomeIcon icon={faCartPlus} /></button>}
        />
      </div>
    );
  });

  return (
    <div>
      <ProductNav />
      <div className="gridContainer">
        <div className="productCardList">{listedProducts}</div>
      </div>
    </div>
  );
};

export default ProductList;
