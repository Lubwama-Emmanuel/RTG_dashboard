import axios from "axios";

export async function getLaptops() {
  try {
    const res = await axios.get(
      "http://127.0.0.1:9000/api/v1/laptops/getLaptops",
    );

    const data = res.data.data;

    console.log(res);

    return data;
  } catch (error) {
    console.log("an error occured", error);
    return;
  }
}

// get all laptops
export async function getLaptop() {
  return;
}

export async function postLaptop() {
  return;
}
