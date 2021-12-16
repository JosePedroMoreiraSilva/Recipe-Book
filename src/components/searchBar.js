import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {

  //   const [mealsList, setMealsList] = useState([]);

  //   const goToRecipe = (event, idMeal) => {
  //     navigate("/Recipe/" + idMeal);
  //     event.preventDefault();
  //   };

  //   useEffect(() => {
  //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  //       .then((response) => response.json())
  //       .then((data) => setMealsList(data.meals));
  //   }, [category]);

//   www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />{" "}
        </InputGroup.Text>
        <FormControl
          placeholder="Main Ingredient"
          aria-label="Main Ingredient"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};
export default SearchBar;
