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
let totalPrice=0;
cart.cartItems.forEach((el)=>{
  totalPrice+=el.price*el.quantity;
})
document.querySelector("#subtotal").innerHTML=`$${totalPrice.toFixed(2)}`
let tax=0.05*totalPrice;
document.querySelector("#tax").innerHTML=`$${tax.toFixed(2)}`
let finalprice=totalPrice+tax;
if(!cart.cartItems.length){
  document.querySelector("#total").innerHTML=`$${finalprice.toFixed(2)}`
}
else{
  finalprice+=5;
  document.querySelector("#total").innerHTML=`$${finalprice.toFixed(2)}`
}

}
function eventDelegator(){
  document.addEventListener("click",(el)=>{
    if(el.target.classList.contains("buy-btn")){
      cart.cartItems=[];
      cart.toStorage();
      cartSummary();
    }
  })
}
cartSummary();
moneyCalc();
eventDelegator();