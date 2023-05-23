import "./RecipeCard.css";

function RecipeCard(props) {
  function deleteRecipe() {
    props.onRemove(props.index);
  }
  return (
    <>
      <div className="recipe">
        <h3>{props.name}</h3>
        <p>
          <strong>Ingredients: </strong>
          {props.ingrediants}
        </p>
        <p>
          <strong>Method: </strong>
          {props.method}
        </p>
        <button
          onClick={deleteRecipe}
          className="delete-button"
          id={props.index}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default RecipeCard;
