import product from "../../components/product.js";
import vars from "../../vars.js";

const searchForm = document.getElementById("searchBarForm");

export default function searchBar() {
  addSubmitListener();
}

function addSubmitListener() {
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = searchForm.elements["query"].value;
    const products = await search(query);

    container.innerHTML = "";
    products.forEach((productData) => product(productData, vars.container));
  });
}

async function search(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data.products;
}
