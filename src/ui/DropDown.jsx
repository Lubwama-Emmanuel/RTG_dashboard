import Label from "./Label";

/* eslint-disable react/prop-types */
export default function DropDown({ selectedValue, onChange, label, options }) {
  return (
    <div className="flex flex-col items-start">
      <Label>{label}</Label>
      <select className="capitalize" value={selectedValue} onChange={onChange}>
        {options.map((el) => (
          <option value={el} key={Math.random()}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
