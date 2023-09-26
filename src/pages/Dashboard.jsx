import { useState } from "react";
import Button from "../ui/Button";
import DropDown from "../ui/DropDown";

const dellProducts = [
  {
    id: 0,
    itemName: "xps",
  },
  {
    id: 1,
    itemName: "precision",
  },
];

const hpProducts = [
  {
    id: 0,
    itemName: "elitebook",
  },
  {
    id: 1,
    itemName: "spectre",
  },
];

const brands = [
  {
    id: 0,
    itemName: "dell",
  },
  {
    id: 1,
    itemName: "hp",
  },
  {
    id: 2,
    itemName: "lenovo",
  },
  {
    id: 3,
    itemName: "acer",
  },
];

export default function Dashboard() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  let newLaptop = {};

  function handleSubmit(e) {
    e.preventDefault();

    newLaptop.name = name;

    console.log(newLaptop);

    setName("");
  }

  // function handleSetBrand(){
  //   setBrand()
  // }

  return (
    <div className="">
      <h2 className="mb-5 text-3xl">Welcome, Rex!</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex flex-col items-start">
          <label>Laptop Name</label>
          <input
            type="text"
            placeholder="Enter laptop name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <div className="flex">
          <DropDown
            options={brands}
            label="Brand"
            selectedValue={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {brand === "dell" && (
            <DropDown options={dellProducts} label="products" />
          )}
          {brand === "hp" && <DropDown options={hpProducts} label="products" />}
          {/* <div className="flex flex-col items-start">
            <label>Catergory</label>
            <select>
              <option value="Gaming">Gaming</option>
              <option value="lenovo">lenovo</option>
              <option value="acer">acer</option>
            </select>
          </div> */}
        </div>
      </form>
      <Button>{"submit"}</Button>
    </div>
  );
}
