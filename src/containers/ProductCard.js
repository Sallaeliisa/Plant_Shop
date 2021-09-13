import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = ({ mainImg, name, latinName, prize }) => {
  return (
    <Card border="light" style={{ width: "12vw" }}>
         <Card.Img variant="top" src={mainImg} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{latinName}</Card.Subtitle>
        <Card.Text>{prize} €</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
