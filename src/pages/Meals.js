import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Meals = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const [mealsList, setMealsList] = useState([]);

  const goToRecipe = (event, idMeal) => {
    navigate("/Recipe/" + idMeal);
    event.preventDefault();
  };

  useEffect(() => {

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    )
      .then((response) => response.json())
      .then((data) => setMealsList(data.meals));
  }, [category]);

  return (
    <div>
      <h2> Meals of {category} </h2>
      <Container>
        <Row>
          {mealsList.map((meal) => (
            <Col xs={6} md={4} style={{ padding: "15px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                  <Card.Title>{meal.strMeal}</Card.Title>
                  <Button variant="primary" onClick={(ev) => goToRecipe(ev, meal.idMeal)}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Meals;
