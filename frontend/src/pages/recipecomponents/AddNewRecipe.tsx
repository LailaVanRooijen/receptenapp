import axios from "axios";
import { useAxiosGet } from "../../customhooks/useAxios";
import AddRecipeIngredient from "./AddRecipeIngredient";
import { useEffect, useState } from "react";
import Button from "../../genericComponents/Button";
import InputField from "../../genericComponents/InputField";
import TextField from "../../genericComponents/TextField";
import { useNavigate } from "react-router-dom";

const AddNewRecipe = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const { data, loading, error } = useAxiosGet(
    "http://localhost:8080/api/v1/ingredients"
  );

  useEffect(() => {}, []);

  const createNewRecipe = () => {
    axios
      .post("http://localhost:8080/api/v1/recipes", {
        description: description,
        name: title,
        ingredientId:
          JSON.parse(localStorage.getItem("recipeIngredients")) || [],
      })
      .then((response) => navigate(`/recipes/${response.data.id}`))
      .then(() => {
        localStorage.setItem("recipeIngredients", JSON.stringify([]));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center mx-12 h-screen">
        <InputField
          handleChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          hasLabel={true}
          label="title"
          style={"w-full"}
        />
        <TextField
          handleChange={(e) => {
            setDescription(e.target.value);
          }}
          content={description}
          style={"w-full"}
        />

        {data && <AddRecipeIngredient ingredients={data} />}
        <Button
          content={"submit"}
          style={"border-6"}
          handleClick={createNewRecipe}
        />
      </div>
    </>
  );
};

export default AddNewRecipe;
