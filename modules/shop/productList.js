import product from "../../components/product.js";

const container = document.getElementById("productList");

export default async function productList() {
  const products = await getAllProducts();

  products.forEach((productData) => product(productData, container));
}

async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}
