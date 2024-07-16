import axios from "axios";
import { useEffect, useState } from "react";
import RecipeIngredient from "./RecipeIngredient";
import AddNewIngredient from "./AddNewIngredient";
import Button from "../../genericComponents/Button";
import InputField from "../../genericComponents/InputField";
import DropdownBox from "../../genericComponents/DropdownBox";

const AddRecipeIngredient = () => {
  const [ingredients, setIngredients] = useState([]);

  const initialIngredients =
    JSON.parse(localStorage.getItem("recipeIngredients")) || [];

  const [quantity, setQuantity] = useState<number>(1);
  const [ingredientId, setIngredientId] = useState(1);
  const [recipeIngredients, setRecipeIngredients] =
    useState<number[]>(initialIngredients);

  const [refresh, setRefresh] = useState<boolean>();

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/ingredients")
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);

  useEffect(() => {
    const storedIngredients = localStorage.getItem("recipeIngredients");
    if (storedIngredients && storedIngredients.length > 0) {
      setRecipeIngredients(JSON.parse(storedIngredients));
    }
  }, [refresh]);

  useEffect(() => {
    localStorage.setItem(
      "recipeIngredients",
      JSON.stringify(recipeIngredients)
    );
  }, [recipeIngredients]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      setQuantity(value);
    }
  };

  const handlePostIngredient = () => {
    axios
      .post("http://localhost:8080/api/v1/recipe-ingredients", {
        quantity: quantity,
        ingredientId: ingredientId,
      })
      .then((response) => {
        setRecipeIngredients((prev) => [...prev, response.data.id]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 justify-center items-center p-2 w-full">
        <InputField
          handleChange={handleQuantityChange}
          type={"number"}
          value={quantity}
          style={""}
        />
        {ingredients && (
          <DropdownBox
            name={"ingredients"}
            values={ingredients}
            handleChange={(e) => {
              setIngredientId(e.target.value);
            }}
          />
        )}

        <Button handleClick={handlePostIngredient} content={"Add to recipe"} />
      </div>
      <AddNewIngredient refresh={handleRefresh} />
      <div className="flex flex-col w-full p-12 ">
        <h6 className="text-xl font-bold py-2 text-secondary border-b-4 border-tertiary">
          Current ingredients
        </h6>
        {recipeIngredients.map((createdId, index) => (
          <RecipeIngredient
            key={createdId + index}
            recipeIngredientId={createdId}
            handleRefresh={handleRefresh}
          />
        ))}
      </div>
    </>
  );
};

export default AddRecipeIngredient;
