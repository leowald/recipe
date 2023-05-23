import "./Form.css";
import { useState, useRef } from "react";

function Form(props) {
  const [name, updateName] = useState("");
  const [ingrediants, updateIngrediants] = useState("");
  const [method, updateMethod] = useState("");
  const [recipe, updateRecipe] = useState("");
  let id = useRef(0);

  function submitHandler(e) {
    e.preventDefault();
    const newRecipe = {
      name: name,
      ingrediants: ingrediants,
      method: method,
      id: id.current,
    };
    props.onSubmit(newRecipe);
    id.current++;
    //console.log(recipe.name);
    updateIngrediants("");
    updateMethod("");
    updateName("");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="recipe-name">Name:</label>
        <input
          onChange={(e) => updateName(e.target.value)}
          type="text"
          id="recipe-name"
          value={name}
          required
        ></input>
        <br />
        <label htmlFor="recipe-ingredients">Ingredients:</label>
        <textarea
          onChange={(e) => updateIngrediants(e.target.value)}
          id="recipe-ingredients"
          rows="5"
          value={ingrediants}
          required
        ></textarea>
        <br />
        <label htmlFor="recipe-method">Method:</label>
        <textarea
          onChange={(e) => updateMethod(e.target.value)}
          id="recipe-method"
          value={method}
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
