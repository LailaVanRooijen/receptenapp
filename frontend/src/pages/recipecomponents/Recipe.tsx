import { useNavigate } from "react-router-dom";
import Ingredients from "./Ingredients";

const Recipe = ({ recipe, layoutStyle }) => {
  const navigate = useNavigate();
  return (
    <li
      key={recipe.id}
      className={`${layoutStyle} p-4`}
      onClick={() => {
        navigate(`/recipes/${recipe.id}`);
        console.log(recipe.id);
      }}
    >
      <h6 className="text-xl underline font-bold p-2">{recipe.name}</h6>
      <p className="shadow-sm p-2">{recipe.description}</p>
      <h5 className="text-md font-bold p-2">Ingredients</h5>
      <Ingredients key={recipe.id} ingredients={recipe.recipeIngredients} />
    </li>
  );
};

export default Recipe;
