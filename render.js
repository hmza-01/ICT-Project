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
      <div class="name-desc">
        <h3>${el.name}</h3>
        <p>${el.description}</p>
        </div>
        <div class="product-price">
            <div class="product-cash">Rs.${el.price}</div>
            <div>
            <button class="cart-btn" data-product-id=${el.id}>Add to Cart</button>
            <button class="detail-btn" data-product-id=${el.id}>Show Details</button>
            </div>
            </div>
    </div>
</div>`
  })
  document.querySelector(".products-grid").innerHTML=accumulator;
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
function eventDelegator(){
  document.addEventListener("click",(el)=>{
    if(el.target.classList.contains("detail-btn")){
      const productId=el.target.dataset.productId;
      localStorage.setItem("descriptionId",JSON.stringify(productId));
      window.location.href="./individual.html";
    }
    if(el.target.classList.contains("cart-btn")){
      const productId=el.target.dataset.productId;
      cart.AddtoCart(productId,1);
     let timeout;
     animation(document.querySelector(".toast"),timeout);
    }
  })
}

display();
eventDelegator();
