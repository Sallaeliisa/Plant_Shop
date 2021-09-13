import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../containers/ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const listedProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          prize={product.prize}
        />
      </div>
    );
  });

  return (
    <div className="listContainer">
    <div className="productCardList">
      {listedProducts}
    </div>
    </div>
  );
};

export default ProductList;
