import { products } from "./productsData.js";
import { cart } from "./cart.js";
function display(){
  let accumulator=``;
  products.forEach((el)=>{
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
function eventDelegator(){
  document.addEventListener("click",(el)=>{
    if(el.target.classList.contains("cart-btn")){
      console.log("entered add to cart")
      const productId=el.target.dataset.productId;
      cart.AddtoCart(productId,1);
      let timeout;
      animation(document.querySelector(".toast"),timeout);
    }
  })
}
function animation(el,timeout){
  if(timeout){
    clearTimeout(timeout);
  }
  el.classList.add("visible");
  timeout=setTimeout(()=>{
    el.classList.remove("visible")
  },3000)
}
display();
eventDelegator();