import { products } from '../data/products.js';
import { cart,removeProducid} from '../data/cart.js';
import {formatCurrency} from './utils/money.js';
//import {updateCartQuantity} from './amazonJs.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
hello();
const today = dayjs();
const deliveydate = today.add(7,'days');
console.log(deliveydate);
console.log(deliveydate.format('dddd, MMMM D'));
console.log(deliveydate)

let orderSummary='';
cart.forEach((item)=>{
  const productId=item.productId;
const matchingProduct = products.find((product) => product.id === productId);

if (!matchingProduct) {
  console.error(`Product with ID ${productId} not found in products array`);
  return; // Skip this cart item
};
  orderSummary+=`
   <div class="cart-item-container  
   js-item-contaianer-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary 
                  js-update-quantity">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary
                  js-delet-quantity-link"
                  data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
  
  
  `;
 
});

document.querySelector('.js-order-summary').innerHTML=orderSummary;

document.querySelectorAll('.js-delet-quantity-link').forEach((link)=>{
  link.addEventListener('click',() => {
    const productId=link.dataset.productId;
    removeProducid(productId);
  const itemConatiner=document.querySelector(`.js-item-contaianer-${productId}`);
   itemConatiner.remove();
  // updateCartQuantity();

  });
  
});

document.querySelectorAll('.js-update-quantity').forEach((link)=>{
  link.addEventListener('click',() => {
      const productId=link.dataset.productId;
      
  })
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the cart from localStorage or use the default empty cart


  // Count the total number of items in the cart
  let totalItems = 0;
  cart.forEach(item => {
    totalItems += item.quantity; // Add the quantity of each item to the total
  });

  // Update the checkout link with the total number of items
  const cartItemCountLink = document.getElementById('cart-item-count');
  if (cartItemCountLink) {
    cartItemCountLink.textContent = `${totalItems} items`; // Set the text
  }
});