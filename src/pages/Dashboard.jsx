import { useState } from "react";
import DropDown from "../ui/DropDown";
// import Button from "../ui/Button";
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
import Label from "../ui/Label";
import Button from "../ui/Button";

// change api to production baseURL
const baseUrl = `http://127.0.0.1:9000/api/v1`;

const initialState = {
  name: "",
  brand: "",
  productLine: "",
  core: "",
  generation: "",
  processor: "",
  storage: "",
  size: "",
  screen: "",
  price: "",
  desc: "",
};

export default function Dashboard() {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const [specs, setSpecs] = useState(initialState);

  // Function to handle updating specs
  function handleSpecs(inputField, value) {
    setSpecs((currentState) => {
      return { ...currentState, [inputField]: value };
    });
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("images", image);

    images.map((img) => {
      formData.append("images", img);
    });

    formData.append("name", specs.name);
    formData.append("brand", specs.brand);
    formData.append("processor", specs.processor);
    formData.append("storage", specs.storage);
    formData.append("size", specs.size);
    formData.append("generation", specs.generation);
    formData.append("screen", specs.screen);
    formData.append("price", specs.price);
    formData.append("core", specs.core);
    formData.append("desc", specs.desc);

    try {
      await axios.post(`${baseUrl}/laptops/addLaptop`, formData);
    } catch (error) {
      console.log("AN ERROR OCCURED DURING ADDING LAPTOP DATA", error);
      return;
    }
  }

  // function to handle all states
  function handleImagesUpload(e) {
    const files = Array.from(e.target.files);
    setImages(files);
  }

  return (
    <div className="">
      <h2 className="mb-5 text-3xl">Welcome, Rex!</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-5">
          <Label>Laptop Name</Label>
          <input
            type="text"
            placeholder="Enter laptop name"
            value={specs.name}
            onChange={(e) => handleSpecs("name", e.target.value)}
            className="w-56 rounded-lg border border-emerald-500 px-2 py-1 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <div className="flex">
          <div>
            <Label>Main Image</Label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div>
            <Label>other images</Label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImagesUpload(e)}
            />
          </div>
        </div>
        <div className="flex">
          <DropDown
            options={brands}
            label="Brand"
            selectedValue={specs.brand}
            onChange={(e) => handleSpecs("brand", e.target.value)}
          />
          {specs.brand === "dell" && (
            <DropDown
              selectedValue={specs.productLine}
              onChange={(e) => handleSpecs("productLine", e.target.value)}
              options={dellProducts}
              label="products"
            />
          )}
          {specs.brand === "hp" && (
            <DropDown
              selectedValue={specs.productLine}
              onChange={(e) => handleSpecs("productLine", e.target.value)}
              options={hpProducts}
              label="products"
            />
          )}
        </div>
        <div className="flex gap-5">
          <DropDown
            label="processor"
            options={["Choose Processor Type", "intel", "amd"]}
            selectedValue={specs.processor}
            onChange={(e) => handleSpecs("processor", e.target.value)}
          />
          {specs.processor === "intel" && (
            <div className="flex gap-5">
              <DropDown
                selectedValue={specs.core}
                onChange={(e) => handleSpecs("core", e.target.value)}
                label="core"
                options={cores}
              />
              <DropDown
                selectedValue={specs.generation}
                onChange={(e) => handleSpecs("generation", e.target.value)}
                label="generation"
                options={generations}
              />
            </div>
          )}
          {specs.processor === "amd" && (
            <DropDown
              selectedValue={specs.core}
              onChange={(e) => handleSpecs("core", e.target.value)}
              label="ryzen"
              options={ryzens}
            />
          )}
        </div>
        <div className="flex gap-5">
          <DropDown
            label="storage"
            options={["Choose Storage Type", "ssd", "hdd"]}
            selectedValue={specs.storage}
            onChange={(e) => handleSpecs("storage", e.target.value)}
          />
          {specs.storage === "ssd" && (
            <div className="flex">
              <DropDown
                selectedValue={specs.size}
                onChange={(e) => handleSpecs("size", e.target.value)}
                label="size"
                options={ssd}
              />
            </div>
          )}
          {specs.storage === "hdd" && (
            <DropDown
              selectedValue={specs.size}
              onChange={(e) => handleSpecs("size", e.target.value)}
              label="size"
              options={hdd}
            />
          )}
        </div>

        <div className="flex gap-5">
          <DropDown
            selectedValue={specs.screen}
            onChange={(e) => handleSpecs("screen", e.target.value)}
            label="Screen"
            options={["4k", "1080p"]}
          />
          <DropDown
            selectedValue={specs.screen}
            onChange={(e) => handleSpecs("screen", e.target.value)}
            label="Type"
            options={["touch", "non-touch"]}
          />
          <DropDown
            selectedValue={specs.screen}
            onChange={(e) => handleSpecs("screen", e.target.value)}
            label="Size"
            options={["13", "14"]}
          />
        </div>
        <div className="flex gap-5">
          <Label>{"Price"}</Label>
          <input
            type="number"
            value={specs.price}
            onChange={(e) => handleSpecs("price", e.target.value)}
            placeholder="Enter price"
            className="w-56 rounded-lg border border-emerald-500 px-2 py-1 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <div className="flex gap-5">
          <Label>Description</Label>
          <textarea
            placeholder="Enter laptop description"
            value={specs.desc}
            onChange={(e) => handleSpecs("desc", e.target.value)}
            className="w-64 rounded-lg border border-emerald-500 px-2 py-1 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <Button handleClick={handleSubmit}>submit</Button>
      </form>
    </div>
  );
}
