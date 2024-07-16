import axios from "axios";
import { useAxiosGet } from "../../customhooks/useAxios";
import Button from "../../genericComponents/Button";
import { TbHttpDelete } from "react-icons/tb";

const RecipeIngredient = ({ recipeIngredientId, handleRefresh }) => {
  const { data, loading, error } = useAxiosGet(
    `http://localhost:8080/api/v1/recipe-ingredients/${recipeIngredientId}`
  );

  const deleteIngredient = (id: number) => {
    axios
      .delete(`http://localhost:8080/api/v1/recipe-ingredients/${id}`)
      .catch((error) => {
        console.error(error);
      })
      .then(removeItemFromLocalStorage)
      .then(handleRefresh);
  };

  const removeItemFromLocalStorage = () => {
    let recipeIngredients = JSON.parse(
      localStorage.getItem("recipeIngredients")
    );
    recipeIngredients = recipeIngredients.filter((id: number) => id != data.id);
    localStorage.setItem(
      "recipeIngredients",
      JSON.stringify(recipeIngredients)
    );
  };

  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-primary p-2 text-tertiary text-md font-bold">
      {data && (
        <>
          <div className="flex flex-row">
            <span className="w-36">{`${data.quantity} ${data.ingredient.unit}`}</span>
            <span className="w-12">🔸</span>
            <span className="">{`${data.ingredient.name}`}</span>
          </div>
          <Button
            isDeleteButton={true}
            content={<TbHttpDelete className="text-xl" />}
            style={"w-fit"}
            handleClick={() => {
              deleteIngredient(data.id);
            }}
          />
        </>
      )}
    </div>
  );
};

export default RecipeIngredient;
