import { cart } from "./cart.js";
function cartSummary(){
let accumulator=``
if(cart.cartItems.length>0){
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
        <div class="delete-btn" data-product-id=${el.id}>Delete...</div>
      </div>
      </div>
    </div>`
})
document.querySelector(".cart-items-container").innerHTML=accumulator;
}
else{
  document.querySelector(".cart-items-container").innerHTML=`<div class="oops-unit">
  <div class="oops-container">
    <img class="oops"src="./AlSadiq/emptyimages.png">
  </div>
  <div class="oops-text">Your Cart Seems empty....</div>
</div>`
}
}
function moneyCalc(){
let totalPrice=0;
let quantity=0;
cart.cartItems.forEach((el)=>{
  totalPrice+=el.price*el.quantity;
  quantity+=el.quantity;
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
return {totalPrice,tax,finalprice,quantity};
}
function eventDelegator(){
  document.addEventListener("click",(el)=>{
    if(el.target.classList.contains("buy-btn")){ 
      cart.cartItems=[];
      cart.toStorage();
      cartSummary();
      if(data.totalPrice>0){
      document.querySelector(".cart-items-section").innerHTML=``;
      document.querySelector(".cart-items-section").innerHTML=`
      <div class="billing-detail">Billing Details:</div>
      <div class="receipt">
      <div class="top-section-receipt">
        <div class="img-tick-container">
          <img class="image-tick" src="./AlSadiq/tick.png">
        </div>
        <div class="txt-receipt">Order Summary</div>
      </div>
      <div class="middle-section-receipt">
        <div class="pr">Price:$${data.totalPrice.toFixed(2)}</div>
        <div class="pr">Tax:$${data.tax.toFixed(2)}</div>
        <div class="pr ship">Shipping:$5.00</div>
        <div class="fpr">Total:$${data.finalprice.toFixed(2)}</div>
        <div class="pr">Total Items:${data.quantity}</div>
        <div class="pr ship">Dispatched By: AlSadiq Co.&copy;</div>
        <div class="fpr">Dispatch Id:${Date.now()}</div>
      </div>
      <div class="bottom-section-receipt">
        <div>
          <img src="./AlSadiq/dispatch.jpeg">
        </div>
        <button class="btn-close">Close</button>
      </div>
      </div>`
      }
    }
    if(el.target.classList.contains("btn-close")){
      window.location.href="./product.html"
    }
    if(el.target.classList.contains("delete-btn")){
        document.querySelector(".toast").classList.add("visible")
        const itemid=el.target.dataset.productId;
        console.log(itemid);
        cart.deleteItem(itemid);
        cartSummary();
        data=moneyCalc();
        setTimeout(()=>{
          document.querySelector(".toast").classList.remove("visible")
        },3000);

    }
  })
}
cartSummary();
let data=moneyCalc();
eventDelegator();