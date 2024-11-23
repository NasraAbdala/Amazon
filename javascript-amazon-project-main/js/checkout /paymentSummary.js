import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDlivery} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';
export function RenderpymentSummary() {
  let productprice=0;
  let pricdelivery=0;
  let reviewOrder='';
  cart.forEach((item) => {
   
     const product=getProduct(item.productId);
     productprice+=product.priceCents*item.quantity;
     const deliveryopton = getDlivery(item.deliveryOptionId);
      pricdelivery += deliveryopton.priceCents;
     
  });
  const total = productprice+pricdelivery;
  const taxttotal = total*0.1;
  const totall = total+taxttotal;
  console.log(totall);
 reviewOrder+=`
  
         

          <div class="payment-summary-row">
            <div>Items</div>
            <div class="payment-summary-money">$${formatCurrency(productprice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(pricdelivery)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxttotal)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totall)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        
 
 `;
 document.querySelector('.js-review-order').innerHTML=reviewOrder;
}