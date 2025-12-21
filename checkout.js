import { cart } from "./cart.js";
function cartSummary(){
let accumulator=``
cart.cartItems.forEach((el)=> {
  accumulator+=`
    <div class="product-card">
    <div class="product-img">
    <img class="img" src="./AlSadiq/gurr.jpg">
    </div>
    <div class="product-info">
    <h3>${el.name}</h3>
    <p>${el.description}</p>
    <div class="product-price">
    <div class="product-cash">$${el.price}</div>
    <div class="cart-btn">Quantity:${el.quantity}</div>
    </div>
    </div>
    </div>`
})
document.querySelector(".cart-items-container").innerHTML=accumulator;
}
function moneyCalc(){
  let Total = 0;
  cart.cartItems.forEach((el) => {
    Total += el.price * el.quantity;
  });
}
cartSummary();
moneyCalc();