import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../containers/ProductCard";
import ProductNav from "../components/ProductNav";

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
          color={product.color}
          prize={product.prize}
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
