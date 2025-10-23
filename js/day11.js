let order = {
  foodItem: ["Maggie", "Coke"],
  price: 50,
  location: "Ghaziabad",
};

function placeOrder(orderDetail, callBack) {
  console.log("Payment is in progress");
  setTimeout(() => {
    console.log(`Payment of ${orderDetail.price} is done. Order is placed.`);
    callBack(orderDetail);
  }, 3000);
}

function prepareOrder(orderDetail, callBack) {
  console.log(
    `Order preparation ${orderDetail.foodItem[0]} and ${orderDetail.foodItem[1]} is started`
  );
  setTimeout(() => {
    console.log("Order is ready");
    callBack();
  }, 5000);
}

function pickUpOrder() {
  console.log("Delivery Boy reach the shop");
  setTimeout(() => {
    console.log("Delivery boy picked the order");
  }, 5000);
}
placeOrder(order, (order) => {
  prepareOrder(order, () => {
    pickUpOrder();
  });
});
