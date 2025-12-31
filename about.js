
import { products } from "./productsData.js";
import { cart } from "./cart.js";
function descriptionRenderer(){
  let count=0;
 
  let RandomAccumulator=``;
  products.forEach((el)=>{
    if(count<4){
  RandomAccumulator+=`
    <div class="product-card">
    <div class="product-img">
      <img src="${el.url}" alt="${el.name}">
    </div>
    <div class="product-info">
      <h3>${el.name}</h3>
      <p>${el.description}</p>
      <button data-product-id=${el.id} class="btn view-btn" style="padding: 8px 15px; margin-top: 10px; display: inline-block;">View Product</button>
    </div>
    </div>`
   count++;

  }
})
   document.querySelector(".products-grid").innerHTML=RandomAccumulator;
   document.querySelectorAll(".view-btn").forEach((e)=>{
        e.addEventListener("click",(el)=>{
        const productId=el.target.dataset.productId;
        localStorage.setItem("descriptionId",JSON.stringify(productId));
        window.location.href="./individual.html";
   })
  })
  }

descriptionRenderer();
