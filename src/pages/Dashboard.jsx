import { useState } from "react";
import DropDown from "../ui/DropDown";
import Button from "../ui/Button";
import axios from "axios";

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

const baseUrl = `http://127.0.0.1:9000/api/v1`;

export default function Dashboard() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [productLine, setProductLine] = useState("");
  const [core, setCore] = useState("");
  const [generation, setGeneration] = useState("");
  const [processor, setProcessor] = useState("");
  const [storage, setStorage] = useState("ssd");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("processor", processor);
    formData.append("storage", storage);
    formData.append("size", size);
    formData.append("generation", generation);
    formData.append("core", core);

    try {
      await axios.post(`${baseUrl}/laptops/addLaptop`, formData);
    } catch (error) {
      return;
    }

    setName("");
    setBrand("");
    setCore("");
    setGeneration("");
    setProcessor("");
    setProcessor("");
    setProductLine("");
    setSize("");
    setImage(null);
    setStorage("");
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
        <div className="flex flex-col items-start">
          <label>Laptop Image</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="flex">
          <DropDown
            options={brands}
            label="Brand"
            selectedValue={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {brand === "dell" && (
            <DropDown
              selectedValue={productLine}
              onChange={(e) => setProductLine(e.target.value)}
              options={dellProducts}
              label="products"
            />
          )}
          {brand === "hp" && (
            <DropDown
              selectedValue={productLine}
              onChange={(e) => setProductLine(e.target.value)}
              options={hpProducts}
              label="products"
            />
          )}
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
              <DropDown
                selectedValue={core}
                onChange={(e) => setCore(e.target.value)}
                label="core"
                options={cores}
              />
              <DropDown
                selectedValue={generation}
                onChange={(e) => setGeneration(e.target.value)}
                label="generation"
                options={generations}
              />
            </div>
          )}
          {processor === "amd" && (
            <DropDown
              selectedValue={core}
              onChange={(e) => setCore(e.target.value)}
              label="ryzen"
              options={ryzens}
            />
          )}
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
              <DropDown
                selectedValue={size}
                onChange={(e) => setSize(e.target.value)}
                label="size"
                options={ssd}
              />
            </div>
          )}
          {storage === "hdd" && (
            <DropDown
              selectedValue={size}
              onChange={(e) => setSize(e.target.value)}
              label="size"
              options={hdd}
            />
          )}
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
        <Button>{"submit"}</Button>
      </form>
    </div>
  );
}
