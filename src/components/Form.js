import "./Form.css";
import { useState } from "react";

function Form(props) {
  const [name, updateName] = useState("");
  const [ingrediants, updateIngrediants] = useState("");
  const [method, updateMethod] = useState("");
  const [recipe, updateRecipe] = useState();

  function submitHandler(e) {
    e.preventDefault();
    const newRecipe = {
      recipeName: name,
      ingrediants: ingrediants,
      method: method,
    };
    props.onSubmit(newRecipe);
    updateIngrediants("");
    updateMethod("");
    updateName("");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label for="recipe-name">Name:</label>
        <input
          onChange={(e) => updateName(e.target.value)}
          type="text"
          id="recipe-name"
          required
        ></input>
        <br />
        <label for="recipe-ingredients">Ingredients:</label>
        <textarea
          onChange={(e) => updateIngrediants(e.target.value)}
          id="recipe-ingredients"
          rows="5"
          required
        ></textarea>
        <br />
        <label for="recipe-method">Method:</label>
        <textarea
          onChange={(e) => updateMethod(e.target.value)}
          id="recipe-method"
          rows="5"
          required
        ></textarea>
        <br />
        <button type="submit">Add Recipe</button>
      </form>
    </>
  );
}

export default Form;
