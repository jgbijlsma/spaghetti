import product from "../../components/product.js";

const container = document.getElementById("featuredProduct");

export default async function featuredProduct() {
  const data = await getFeaturedProduct();
  product(data, container);
}

async function getFeaturedProduct() {
  const res = await fetch("https://dummyjson.com/products/1");
  const data = await res.json();
  return data;
}
