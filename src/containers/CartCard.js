import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CartCard = ({ mainImg, name, latinName, color, prize, quantity, removeBtn, addBtn }) => {
  
  return (
    <Card border="light" style={{ width: "100%" }}>
      <Card.Img variant="top" src={mainImg} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{latinName}</Card.Subtitle>
        <Card.Text>{color}</Card.Text>
        <Card.Text>{prize} €</Card.Text>
        <ListGroup horizontal>
          <ListGroup.Item>{removeBtn}</ListGroup.Item>
          <ListGroup.Item>{quantity}</ListGroup.Item>
          <ListGroup.Item>{addBtn}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
