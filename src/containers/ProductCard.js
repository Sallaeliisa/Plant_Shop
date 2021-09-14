import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ mainImg, name, latinName, color, prize }) => {
  return (
    <Card border="light" style={{ width: "100%" }}>
      <Card.Img variant="top" src={mainImg} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{latinName}</Card.Subtitle>
        <Card.Text>{color}</Card.Text>
        <Card.Text className='prizeAndIcon'>{prize} €<button><FontAwesomeIcon icon={faCartPlus} /></button></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
