import "./PrintingArea.css";
import RecipeCard from "./RecipeCard";

function PrintingArea(props) {
  return (
    <>
      <div className="right-side">
        <h3>Recipes List</h3>
        <div>
          {props.recipeArr.map(function (recipe) {
            return (
              <RecipeCard
                onRemove={props.onRemove}
                name={recipe.name}
                ingrediants={recipe.ingrediants}
                method={recipe.method}
                index={recipe.id}
              ></RecipeCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PrintingArea;
