import { useAxiosGet } from "../../customhooks/useAxios";

const RecipeIngredient = ({ recipeIngredientId }) => {
  const { data, loading, error } = useAxiosGet(
    `http://localhost:8080/api/v1/recipe-ingredients/${recipeIngredientId}`
  );

  //console.log(data);
  return (
    <div className="flex flex-col border-b-2">
      {data && (
        <>
          <p>{`${data.quantity}🔸${data.ingredient.name}`}</p>
        </>
      )}
    </div>
  );
};

export default RecipeIngredient;
