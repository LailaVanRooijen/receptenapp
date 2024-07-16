const DropdownBox = ({ name, values, style, handleChange }) => {
  return (
    <>
      <select
        className={`${style} border-2 border-tertiary rounded p-2 bg-transparent text-secondary font-bold capitalize `}
        name={name}
        id={name}
        onChange={handleChange}
      >
        {values.map((item) => (
          <option key={item.id} value={item.id} data-unit={item.unit}>
            {`${item.unit} 🔸 ${item.name}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownBox;
