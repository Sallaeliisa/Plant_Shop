import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <DropdownButton className="dropdown" title="Colors">
          {/* <Dropdown.Item as="button" className="colorButton"></Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton"></Dropdown.Item>
          <Dropdown.Item as="button" className="colorButton"></Dropdown.Item> */}
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
