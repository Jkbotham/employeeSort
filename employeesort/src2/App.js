import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [employee, setEmployee] = useState([]);
  const [formObject, setFormObject] = useState({})
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })

  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="employeeSearch"
                      value={employeeSearch}
                      onChange={handleInputChange}
                      placeholder="Enter Employee Name"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            <RecipeList>
              {recipes.map(obj => {
                return (
                  <RecipeListItem
                  key={obj.title}
                  title={obj.title}
                  ingredients={obj.ingredients}
                  href={obj.href}
                  thumbnail={obj.thumbnail}
                  />
                )
              }
              )}


              </RecipeList>

          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
