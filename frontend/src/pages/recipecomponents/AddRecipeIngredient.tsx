import axios from "axios";
import { useEffect, useState } from "react";
import RecipeIngredient from "./RecipeIngredient";

const AddRecipeIngredient = ({ ingredients }) => {
  const initialIngredients =
    JSON.parse(localStorage.getItem("recipeIngredients")) || [];

  const [quantity, setQuantity] = useState<number>(1);
  const [ingredientId, setIngredientId] = useState(ingredients[0].id);
  const [recipeIngredients, setRecipeIngredients] =
    useState<number[]>(initialIngredients);

  useEffect(() => {
    const storedIngredients = localStorage.getItem("recipeIngredients");
    if (storedIngredients && storedIngredients.length > 0) {
      setRecipeIngredients(JSON.parse(storedIngredients));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recipeIngredients",
      JSON.stringify(recipeIngredients)
    );
  }, [recipeIngredients]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  const handleIngredientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIngredientId = e.target.value;
    setIngredientId(selectedIngredientId);
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
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("created ingredients: ", recipeIngredients);
      });
  };

  return (
    <>
      <div className="grid grid-cols-9 gap-2 border-2 w-full p-12">
        <input
          className="border-2 col-span-2 p-2"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <select
          className="col-span-4 p-2 text-center"
          name="ingredients"
          id="ingredients"
          onChange={handleIngredientChange}
        >
          {ingredients.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
        </select>
        <button
          className="col-span-3 border-2 p-2"
          onClick={(e) => {
            e.preventDefault();
            handlePostIngredient();
          }}
        >
          Add ingredient
        </button>
      </div>
      <div className="flex flex-col w-full p-12">
        <h6 className="text-xl font-bold underline py-2">
          Current ingredients:
        </h6>
        {recipeIngredients.map((createdId) => (
          <RecipeIngredient key={createdId} recipeIngredientId={createdId} />
        ))}
      </div>
    </>
  );
};

export default AddRecipeIngredient;
