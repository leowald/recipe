import "./App.css";
import Form from "./components/Form";
import PrintingArea from "./components/PrintingArea";
import { useState } from "react";

function App() {
  const [recipeArr, updateRecipeArr] = useState([]);

  function addRecipe(recipeObj) {
    updateRecipeArr(function (prev) {
      return [...prev, recipeObj];
    });
  }

  function removeRecipe(id) {
    updateRecipeArr(function (prev) {
      return prev.filter(function (recipe) {
        return recipe.id != id;
      });
    });
  }

  return (
    <>
      <div className="heading">
        <h1>Recipe App2</h1>
      </div>
      <div className="container">
        <Form onSubmit={addRecipe}></Form>
        <PrintingArea
          onRemove={removeRecipe}
          recipeArr={recipeArr}
        ></PrintingArea>
      </div>
    </>
  );
}

export default App;
