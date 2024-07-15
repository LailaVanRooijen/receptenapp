import axios from "axios";
import { useAxiosGet } from "../../customhooks/useAxios";
import AddRecipeIngredient from "./AddRecipeIngredient";

const AddNewRecipe = () => {
  const { data, loading, error } = useAxiosGet(
    "http://localhost:8080/api/v1/ingredients"
  );

  const createNewRecipe = () => {
    axios
      .post("http://localhost:8080/api/v1/recipes")
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className="flex flex-col justify-center items-center border-2">
        <input className="border-2" type="text" placeholder="title" />
        <textarea className="border-2" placeholder="description here:" />

        {data && <AddRecipeIngredient ingredients={data} />}
      </form>
    </>
  );
};

export default AddNewRecipe;
