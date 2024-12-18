
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
if(!cart){[{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId:'1'

  }, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionId:'2'
  }];
}
function saveToStorage() {
  if (Array.isArray(cart)) {
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    console.error('Invalid cart data', cart);
  }
}

  
export function addCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId)
    {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;

  }
  else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId:'1'
    });

  }
  saveToStorage();
}


export function removeProducid(productId) {
  // Filter out the item with the matching productId
  cart = cart.filter((item) => item.productId !== productId);

  saveToStorage(); // Save the updated cart to localStorage
}
/*

export function UpdateDeli(productId,deliveryOptionId) {
  let matchingItem;
cart.forEach((item) => {
  if (productId === item.productId)
  {
    matchingItem = item;
  }
});
matchingItem.deliveryOptionId=deliveryOptionId;
saveToStorage()
  
  
}
*/

export function updateDeliveryOption(productId,deliveryOptionId) {
  let matchingItem;
cart.forEach((item) => {
  if (productId === item.productId)
  {
    matchingItem = item;
  }
});
matchingItem.deliveryOptionId=deliveryOptionId;
saveToStorage();

  
}