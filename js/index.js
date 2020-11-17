// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const price = priceElement.innerText;
  const quantity = quantityElement.value;
  const subtotal = price * quantity;
  console.dir(`${price} x ${quantity} makes ${subtotal}`);
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  console.dir(subtotalElement);
  console.log(subtotalElement.innerText);
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
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
