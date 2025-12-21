import { products } from "./productsData.js";
import { Cart } from "./cart.js";
let cart=new Cart("cart");
function display(){
  let accumulator=``;
  cart.cartItems.forEach((el)=>{
    accumulator+=`<div class="product-card">
    <div class="product-img">
        <img class="img" src=${el.url}>
    </div>
    <div class="product-info">
        <h3>${el.name}</h3>
        <p>${el.description}</p>
        <div class="product-price">
            <div class="product-cash">$${el.price}</div>
            <button class="cart-btn" data-product-id=${el.id}>Add to Cart</button>
        </div>
    </div>
</div>`
  })
  document.querySelector(".products-grid").innerHTML=accumulator;
}
function animation(){
}
function eventDelegator(){
  document.addEventListener("click",(el)=>{
    if(el.target.classList.contains("cart-btn")){
      const productId=el.target.dataset.productId;
      cart.AddtoCart(productId,1);
      console.log(cart.cartItems)
    }
  })
}
display();
eventDelegator();