import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingle } from "../services/request";
import ProductCard from "../containers/ProductCard";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getSingle(id);
			setProduct(data);
		};
		fetchData();
	}, [id]);


  return (
      <div className='singleProduct' key={product.id}>
        <ProductCard
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          color={product.color}
          prize={product.prize}
        />
      </div>
  );
};

export default SingleProduct;
