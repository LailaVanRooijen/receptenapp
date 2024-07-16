const TextField = ({ handleChange, content, style }) => {
  return (
    <>
      <textarea
        className={`${style} p-2 border-2 border-tertiary text-secondary rounded font-bold resize-none focus:border-secondary`}
        onChange={handleChange}
        value={content}
      />
    </>
  );
};

export default TextField;
