import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const goToMeals = (event, catego) => {
    navigate("/Meals/" + catego);
    event.preventDefault();
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      <h2> Categories</h2>
      <Container>
        <Row>
          {categories.map((category) => (
            <Col xs={6} md={4} style={{ padding: "15px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={category.strCategoryThumb} />
                <Card.Body>
                  <Card.Title>{category.strCategory}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={(ev) => goToMeals(ev, category.strCategory)}
                  >
                    Go to the category
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Categories;
