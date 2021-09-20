import React from "react";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Flower } from "./flower.svg";

const ProductNav = () => {

  return (
    <div className="productNavContainer">
      <div className="productNav">
        <DropdownButton className="dropdown" title="Category">
          <Dropdown.Item href="#/action-1">Plants</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Seeds</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Bulbs</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Indoor Plants</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown" title="Flower color">
          <Dropdown.Item as="button" className="colorButton" id="red">
            <Flower fill='red'/>
            red
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="orange">
            <Flower fill='orange' />
            orange
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="yellow">
            <Flower fill='gold' />
            yellow
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="green">
            <Flower fill='green' />
            green
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="blue">
            <Flower fill='blue' />
            blue
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="purple">
            <Flower fill='purple' />
            purple
          </Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton" id="white">
            <Flower />
            white
          </Dropdown.Item>
        </DropdownButton>
        <InputGroup className="searchBox">
          <FormControl />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default ProductNav;
