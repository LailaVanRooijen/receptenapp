const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              <span className="col-span-1">
                🔸{ingredient.quantity} x {ingredient.ingredient.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Ingredients;
