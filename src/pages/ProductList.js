import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../containers/ProductCard";

const ProductList = () => {
    
  const products = useSelector((state) => state);
  console.log(products);

  const listedProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard name={product.name} prize={product.prize} />
      </div>
    );
  });

  return <div>{listedProducts}</div>;
};

export default ProductList;
