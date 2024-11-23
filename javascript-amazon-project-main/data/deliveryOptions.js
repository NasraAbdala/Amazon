export const deliveryOptions=[{
  id:'1',
  deliveryOptionsdays:7,
  priceCents:0
},{
    id: '2',
    deliveryOptionsdays: 3,
    priceCents: 499
},{
    id: '3',
    deliveryOptionsdays: 1,
    priceCents: 999
}];
export function getDlivery(deliverOpoid) {
  
    let deliveroption = '';
    deliveryOptions.forEach((options) => {
      if (options.id === deliverOpoid) {
        deliveroption = options;
      }
    });
    return deliveroption || deliveryOptions[0];
}