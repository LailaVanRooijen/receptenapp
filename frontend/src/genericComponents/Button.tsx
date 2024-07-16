const Button = ({ content, style, handleClick, isDeleteButton }) => {
  let colorscheme = !isDeleteButton
    ? " bg-tertiary hover:bg-tertiary-dark "
    : " bg-secondary hover:bg-secondary-dark ";
  return (
    <button
      className={`${style} ${colorscheme} px-4 py-2 rounded text-white font-bold tracking-wider`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
