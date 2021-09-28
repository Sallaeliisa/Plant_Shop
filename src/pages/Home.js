import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions/actions";
import ProductCard from "../containers/ProductCard";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Product added to cart</Popover.Body>
    </Popover>
  );

  const highlightedProducts = products.map((product) => {
    if(product.id === 1 || product.id === 2 || product.id === 3) {
    return (
      <div key={product.id}>
        <ProductCard
          mainImg={product.mainImg}
          name={product.name}
          latinName={product.latinName}
          color={product.color}
          prize={product.prize}
          icon={<OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}><button onClick={() => dispatch(addProduct(product))}><FontAwesomeIcon icon={faCartPlus} /></button></OverlayTrigger>}
        />
      </div>
    );
  }
  });

  return (
    <div className="home">
      <div className="heroBanner">
        <div className="circleContainer">
          <div id="bgCircle">
            <p id='heroBannerP'>
              Make your
              <br />
              garden dreams
              <br />
              come true
            </p>
          </div>
        </div>
      </div>
      <h1>Autumn Favourites</h1>
      <div className="gridContainer">
        <div className="productCardList">{highlightedProducts}</div>
      </div>
    </div>
  );
};

export default Home;
