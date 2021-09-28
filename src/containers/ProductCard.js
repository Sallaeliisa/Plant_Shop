import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = ({ id, mainImg, name, latinName, color, prize, icon }) => {

  return (
    <div className='productCard'>
    <Card border="light" style={{ width: "100%" }}>
      <Card.Img variant="top" src={mainImg} />
      <Card.Body>  
      <Link to={`/products/${id}`}>
        <Card.Title>{name}</Card.Title>
        </Link>
        <Card.Subtitle>{latinName}</Card.Subtitle>
        <Card.Text>{color}</Card.Text>
        <Card.Text className='prizeAndIcon'>{prize} € {icon}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductCard;
