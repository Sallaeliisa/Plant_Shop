import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = ({ mainImg, name, latinName, color, prize, icon }) => {
  return (
    <Card border="light" style={{ width: "100%" }}>
      <Card.Img variant="top" src={mainImg} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{latinName}</Card.Subtitle>
        <Card.Text>{color}</Card.Text>
        <Card.Text className='prizeAndIcon'>{prize} € {icon}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
