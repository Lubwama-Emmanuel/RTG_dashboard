/* eslint-disable react/prop-types */
export default function DropDown({ selectedValue, onChange, label, options }) {
  return (
    <div className="flex flex-col items-start">
      <label>{label}</label>
      <select value={selectedValue} onChange={onChange}>
        {options.map((el) => (
          <option value={el} key={Math.random()}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
