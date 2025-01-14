// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  console.log("price", price);

  const quantity = product.querySelector(".quantity input");
  console.log("quantity", quantity)

  const priceValue = Number(price.innerHTML)
  console.log("price value", priceValue)

  const quantityValue = Number(quantity.value)
  console.log("quantity value", quantityValue)

  const result = priceValue * quantityValue
  console.log("subTotal", result) 

  const total = product.querySelector(".subtotal span")
  console.log("total", total)
  console.log(total.innerHTML)

  total.innerHTML = result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector(".product")
  // updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(element => {
    const subtotal = updateSubtotal(element);
    total += subtotal;
  });
  
 document.querySelectorAll(`#total-value span`).innerHTML = total;
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