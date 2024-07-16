import { useNavigate } from "react-router-dom";
import Ingredients from "./Ingredients";

const Recipe = ({ recipe, layoutStyle }) => {
  const navigate = useNavigate();
  return (
    <li
      key={recipe.id}
      className={`${layoutStyle} p-4 border-secondary-dark rounded `}
      onClick={() => {
        navigate(`/recipes/${recipe.id}`);
        console.log(recipe.id);
      }}
    >
      <h6 className="text-xl font-bold p-2 text-secondary capitalize border-b-2 border-tertiary">
        {recipe.name} name
      </h6>
      <p className="p-2 text-secondary font-bold text-md border-b-2 border-tertiary">
        {recipe.description} description
      </p>
      <h5 className="text-md font-bold p-2">Ingredients</h5>
      <Ingredients key={recipe.id} ingredients={recipe.recipeIngredients} />
    </li>
  );
};

export default Recipe;
