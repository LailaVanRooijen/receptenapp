const InputField = ({ handleChange, value, type, hasLabel, label, style }) => {
  const baseStyle = " px-4 py-2 font-bold tracking-wider ";
  return (
    <>
      <div className={`flex flex-col items-center py-2 w-full`}>
        {hasLabel && (
          <label
            className={`${baseStyle} text-tertiary capitalize w-full text-center`}
            htmlFor="label"
          >
            {label}
          </label>
        )}
        <input
          className={`${baseStyle} ${style} border-2 rounded-md border-tertiary text-secondary focus:border-secondary focus:border-4`}
          type={type}
          onChange={handleChange}
          value={value}
        />
      </div>
    </>
  );
};

export default InputField;
