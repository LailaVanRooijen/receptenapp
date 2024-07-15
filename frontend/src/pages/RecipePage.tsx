import { useParams } from "react-router-dom";
import { useAxiosGet } from "../customhooks/useAxios";
import Recipe from "./recipecomponents/Recipe";

const RecipePage = () => {
  const { id } = useParams();
  const { data, loading, error } = useAxiosGet(
    `http://localhost:8080/api/v1/recipes/${id}`
  );
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <Recipe
          recipe={data}
          layoutStyle={"flex flex-col h-screen items-center"}
        />
      )}
    </>
  );
};

export default RecipePage;
