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
                name={recipe.name}
                ingrediants={recipe.ingrediants}
                method={recipe.method}
              ></RecipeCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PrintingArea;
