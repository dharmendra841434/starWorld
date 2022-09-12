export const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className=" flex flex-row items-center mr-6">
      <input type="radio" checked={value} onChange={onChange} />
      <h1 className=" font-semibold text-lightGray ml-2">{label}</h1>
    </label>
  );
};
