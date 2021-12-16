import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipeList, setRecipeList] = useState([]);

  const goHome = (event) => {
    navigate("/");
    event.preventDefault();
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipeList(data.meals));
  }, [id]);

  return (
    <div>
      {recipeList.map((recipe) => (
        <>
          <h2> Recipe of {recipe.strMeal} </h2>
          <Container>
            <Card>
              <Card.Img variant="top" src={recipe.strMealThumb} />
              <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Card.Text>
                  {" "}
                  Area - {recipe.strArea}
                  <p>
                    <Button variant="danger" href={recipe.strYoutube}>
                      Video
                    </Button>
                  </p>
                </Card.Text>
                <Card.Text>
                  <h4>Instructions</h4>
                  {recipe.strInstructions}
                </Card.Text>
                <Card.Text>
                  <Badge bg="info">{recipe.strTags}</Badge>
                </Card.Text>
                <Card.Text>
                  <h4>Ingredients</h4>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Ingredients</th>
                        <th>Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{recipe.strIngredient1}</td>
                        <td>{recipe.strMeasure1}</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>{recipe.strIngredient2}</td>
                        <td>{recipe.strMeasure2}</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>{recipe.strIngredient3}</td>
                        <td>{recipe.strMeasure3}</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>{recipe.strIngredient4}</td>
                        <td>{recipe.strMeasure4}</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>{recipe.strIngredient5}</td>
                        <td>{recipe.strMeasure5}</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>{recipe.strIngredient6}</td>
                        <td>{recipe.strMeasure6}</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>{recipe.strIngredient7}</td>
                        <td>{recipe.strMeasure7}</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>{recipe.strIngredient8}</td>
                        <td>{recipe.strMeasure8}</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>{recipe.strIngredient9}</td>
                        <td>{recipe.strMeasure9}</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>{recipe.strIngredien11}</td>
                        <td>{recipe.strMeasure12}</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>{recipe.strIngredient11}</td>
                        <td>{recipe.strMeasure11}</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>{recipe.strIngredient12}</td>
                        <td>{recipe.strMeasure12}</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>{recipe.strIngredient13}</td>
                        <td>{recipe.strMeasure13}</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>{recipe.strIngredient14}</td>
                        <td>{recipe.strMeasure14}</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>{recipe.strIngredient15}</td>
                        <td>{recipe.strMeasure15}</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>{recipe.strIngredient16}</td>
                        <td>{recipe.strMeasure16}</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>{recipe.strIngredient17}</td>
                        <td>{recipe.strMeasure17}</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>{recipe.strIngredient18}</td>
                        <td>{recipe.strMeasure18}</td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>{recipe.strIngredient19}</td>
                        <td>{recipe.strMeasure19}</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>{recipe.strIngredient20}</td>
                        <td>{recipe.strMeasure20}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Button variant="primary" onClick={(ev) => goHome(ev)}>
                  Go Home
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </>
      ))}
    </div>
  );
};
export default Recipe;
