import product from "../../components/product.js";
import vars from "../../vars.js";

export default async function productList() {
  const products = await getAllProducts();

  products.forEach((productData) => product(productData, vars.container));
}

async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}
