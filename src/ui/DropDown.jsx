/* eslint-disable react/prop-types */
export default function DropDown({ selectedValue, onChange, label, options }) {
  return (
    <div className="flex flex-col items-start">
      <label>{label}</label>
      <select value={selectedValue} onChange={onChange}>
        {options.map((el) => (
          <option value={el.itemName} key={el.id}>
            {el.itemName}
          </option>
        ))}
      </select>
    </div>
  );
}
