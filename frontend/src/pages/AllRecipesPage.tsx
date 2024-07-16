import { useAxiosGet } from "../customhooks/useAxios";

import Recipe from "./recipecomponents/Recipe";

const AllRecipesPage = () => {
  const { data, loading, error } = useAxiosGet(
    "http://localhost:8080/api/v1/recipes"
  );
  return (
    <div className="font-michroma">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul className="grid grid-cols-3 gap-6 p-6">
          {data.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              layoutStyle={
                "col-span-1 cursor-pointer border-2 rounded shadow-md border-2"
              }
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllRecipesPage;
