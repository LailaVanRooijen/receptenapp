const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li
              key={ingredient.id}
              className="text-md text-secondary font-bold capitalize grid grid-cols-12"
            >
              <span className="col-span-3">
                {ingredient.quantity} {ingredient.ingredient.unit}
              </span>
              <span className="col-span-9">🔸{ingredient.ingredient.name}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Ingredients;
