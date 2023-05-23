export default function product(data, container) {
  renderProduct(data, container);
}

function renderProduct(product, container) {
  container.innerHTML += `
    <h2>${product.title}</h2>
    <span>${product.price}</span>
    <p>${product.description}</p>
  `;
}
