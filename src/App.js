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

  return (
    <>
      <div className="heading">
        <h1>Recipe App</h1>
      </div>
      <div className="container">
        <Form onSubmit={addRecipe}></Form>
        <PrintingArea recipeArr={recipeArr}></PrintingArea>
      </div>
    </>
  );
}

export default App;
