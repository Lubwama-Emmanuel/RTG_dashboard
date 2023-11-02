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

// change api to production baseURL
const baseUrl = `http://127.0.0.1:9000/api/v1`;

export default function Dashboard() {
  // To handle these state all together to make code look better and organized for better readability
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("dell");
  const [productLine, setProductLine] = useState("");
  const [core, setCore] = useState("");
  const [generation, setGeneration] = useState("");
  const [processor, setProcessor] = useState("");
  const [storage, setStorage] = useState("ssd");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [screen, setScreen] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("images", images);

    formData.append("images", image);

    images.map((img) => {
      formData.append("images", img);
    });

    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("processor", processor);
    formData.append("storage", storage);
    formData.append("size", size);
    formData.append("generation", generation);
    formData.append("screen", screen);
    formData.append("price", price);
    formData.append("core", core);
    formData.append("desc", desc);

    console.log(formData);

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
    setStorage("");
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="flex gap-5">
          <DropDown
            selectedValue={processor}
            label="processor"
            options={["intel", "amd"]}
            onChange={(e) => setProcessor(e.target.value)}
          />
          {processor === "intel" && (
            <div className="flex gap-5">
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
        <div className="flex gap-5">
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

        <div className="flex gap-5">
          <DropDown
            selectedValue={screen}
            onChange={(e) => setScreen(e.target.value)}
            label="Screen"
            options={["4k", "1080p"]}
          />
          <DropDown
            selectedValue={screen}
            onChange={(e) => setScreen(e.target.value)}
            label="Type"
            options={["touch", "non-touch"]}
          />
          <DropDown
            selectedValue={screen}
            onChange={(e) => setScreen(e.target.value)}
            label="Size"
            options={["13", "14"]}
          />
        </div>
        <div className="flex gap-5">
          <Label>{"Price"}</Label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-56 rounded-lg border border-emerald-500 px-2 py-1 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <div className="flex gap-5">
          <Label>Description</Label>
          <input
            type="text"
            placeholder="Enter laptop description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-56 rounded-lg border border-emerald-500 px-2 py-1 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
