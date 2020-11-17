// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const price = priceElement.innerHTML;
  const quantity = quantityElement.value;
  const subtotal = price * quantity;
  //console.dir(`${price} x ${quantity} makes ${subtotal}`);
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  //console.dir(subtotalElement);
  //console.log(subtotalElement.innerHTML);
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  const listProducts = document.getElementsByClassName('product');
  console.dir(listProducts);

  sumPrices = 0;

  for (let singleProduct of listProducts) {
    updateSubtotal(singleProduct);
    sumPrices = sumPrices + updateSubtotal(singleProduct);
  }
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = sumPrices;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tdElement = target.parentElement
  const trElement = tdElement.parentElement
  const tbodyElement = trElement.parentElement
  tbodyElement.removeChild(trElement);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const listProduct = document.getElementById('product-list');
  const inputProduct = document.getElementById('product-input');
  const productElement = document.createElement('tr')
  const inputPrice = document.getElementById('price-input');
  const createElement = document.getElementById('create');
  
  const productPrice = inputPrice.value;
  const productName = inputProduct.value;

  
  productElement.innerHTML = 
  `<td class="name"><span>${productName}</span></td>
  <td class="price">$<span> ${productPrice}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$ <span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>`;
  
  productElement.className = 'product'

  /*
  const productElement = document.createElement('tr');
  const productNameElement = document.createElement('td');
  const productPriceElement = document.createElement('td');
  const productQuantityElement = document.createElement('td');
  const productSubtotalElement = document.createElement('td');
  const productActionElement = document.createElement('td');

  productNameElement.innerHTML = `<span>${productName}</span>`;
  productPriceElement.innerHTML = `$<span> ${productPrice}</span>`;
  productQuantityElement.innerHTML ='<input type="number" value="0" min="0" placeholder="Quantity" />'
  productSubtotalElement.innerHTML = '$<span>0</span>'
  productActionElement.innerHTML ='<button class="btn btn-remove">Remove</button>'


  productElement.appendChild(productNameElement);
  productElement.appendChild(productPriceElement);
  productElement.appendChild(productQuantityElement);
  productElement.appendChild(productSubtotalElement);
  productElement.appendChild(productActionElement);
  */

  listProduct.appendChild(productElement);

  const listButtons = document.getElementsByClassName('btn-remove');
  for (let button of listButtons) {
    button.addEventListener('click', removeProduct);
  } 
  calculateAll();

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const listButtons = document.getElementsByClassName('btn-remove');
  for (let button of listButtons) {
    button.addEventListener('click', removeProduct);
  }

  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);
});
