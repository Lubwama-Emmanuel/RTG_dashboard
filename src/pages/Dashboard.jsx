import { useState } from "react";
import Button from "../ui/Button";
import DropDown from "../ui/DropDown";
import {
  dellProducts,
  brands,
  hpProducts,
  cores,
  ryzens,
  generations,
  ssd,
  hdd,
} from "../../Data";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [processor, setProcessor] = useState("");
  const [storage, setStorage] = useState("ssd");

  let newLaptop = {};

  function handleSubmit(e) {
    e.preventDefault();

    newLaptop.name = name;

    console.log(newLaptop);

    setName("");
  }

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
        <div className="flex">
          <DropDown
            selectedValue={processor}
            label="processor"
            options={["intel", "amd"]}
            onChange={(e) => setProcessor(e.target.value)}
          />
          {processor === "intel" && (
            <div className="flex">
              <DropDown label="core" options={cores} />
              <DropDown label="generation" options={generations} />
            </div>
          )}
          {processor === "amd" && <DropDown label="ryzen" options={ryzens} />}
        </div>
        <div className="flex">
          <DropDown
            selectedValue={storage}
            label="storage"
            options={["ssd", "hdd"]}
            onChange={(e) => setStorage(e.target.value)}
          />
          {storage === "ssd" && (
            <div className="flex">
              <DropDown label="size" options={ssd} />
            </div>
          )}
          {storage === "hdd" && <DropDown label="size" options={hdd} />}
        </div>
        <div className="flex flex-col items-start">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter laptop description"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
      </form>
      <Button>{"submit"}</Button>
    </div>
  );
}
