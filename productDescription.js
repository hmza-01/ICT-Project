import { products } from "./productsData.js";
import { cart } from "./cart.js";
let storage=[];
function descriptionRenderer(){
  const descriptionId=JSON.parse(localStorage.getItem("descriptionId"));
  let matchingItem,accumulator=``;
  let RandomAccumulator=``
  products.forEach((el)=>{
    if(el.id===descriptionId){
      matchingItem=el;
    }
  })
  if(matchingItem){
    accumulator+=` <!-- Product Images -->
    <div class="product-images">
        <div class="main-image">
            <img src="${matchingItem.url}" alt="${matchingItem.name}" id="main-product-img">
        </div>
    </div>

    <!-- Product Info -->
    <div class="product-info">
        <h1>${matchingItem.name}</h1>
        
        <div class="product-rating">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="rating-count">(48 reviews)</span>
        </div>
        
        <p class="product-description">
            ${matchingItem.description}
        </p>
        
        <div class="highlight-features">
            <h3>Why Our ${matchingItem.name} Stands Out</h3>
            <ul class="feature-list">
                <li><i class="fas fa-check-circle"></i> <strong>100% Organic:</strong> Sourced from certified organic sugarcane farms</li>
                <li><i class="fas fa-check-circle"></i> <strong>Traditional Process:</strong> Made using age-old techniques passed through generations</li>
                <li><i class="fas fa-check-circle"></i> <strong>Rich in Nutrients:</strong> Contains iron, magnesium, potassium, and B vitamins</li>
                <li><i class="fas fa-check-circle"></i> <strong>No Additives:</strong> Free from preservatives, chemicals, and artificial sweeteners</li>
                <li><i class="fas fa-check-circle"></i> <strong>Versatile:</strong> Perfect for desserts, beverages, and traditional Pakistani sweets</li>
            </ul>
        </div>

        <!-- Pricing Options -->
        <div class="pricing-section">
            <div class="pricing-options">
                <div class="price-box">
                    <h3>Retail Purchase</h3>
                    <div class="price-amount">$${matchingItem.price}/kg</div>
                    <button class="cart-addition btn btn-primary" style="width: 100%; margin-bottom: 10px;">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <p class="price-note">Free shipping on orders above $50</p>
                </div>
                <div class="price-box">
                    <h3>Wholesale Inquiry</h3>
                    <div class="price-amount">Contact for Quote</div>
                    <a href="retail.html" class="btn btn-primary" style="width: 100%; margin-bottom: 10px;">
                        <i class="fas fa-file-invoice-dollar"></i> Request Quote
                    </a>
                    <p class="price-note">Minimum Order Quantity: 50kg</p>
                </div>
            </div>
        </div>
    </div>`
  
  document.querySelector(".product-container").innerHTML=accumulator;
  }
 if(matchingItem){
  storage.forEach((el)=>{
  RandomAccumulator+=`
    <div class="related-card">
    <div class="related-image">
      <img src="${el.url}" alt="${el.name}">
    </div>
    <div class="related-info">
      <h3>${el.name}</h3>
      <p>${el.description}</p>
      <button data-product-id=${el.id} class="btn view-btn" style="padding: 8px 15px; margin-top: 10px; display: inline-block;">View Product</button>
    </div>
    </div>`
})
   document.querySelector(".related-grid").innerHTML=RandomAccumulator;
 }
}
function getID(){
  storage=[];
  let count=0;
  while(count<4){
  let maxLength=products.length||4;
  let value=Math.floor(Math.random()*100);
  let float=value%maxLength;
  let duplicate;
  if(storage.length>0){
   duplicate=storage.find((item)=>{
   return item.Sr===float
  });
  }
  console.log(duplicate)
  console.log(storage)
  console.log(float)
  if(!duplicate){
  products.forEach((e)=>{
    if(e.Sr===float){
      storage.push(e);
        count++;
  }
  })
  }
}
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
document.addEventListener("click",(e)=>{
if(e.target.classList.contains("cart-addition")){
  const productId=JSON.parse(localStorage.getItem("descriptionId"));
  cart.AddtoCart(productId,1);
     let timeout;
     animation(document.querySelector(".toast"),timeout);
}
if(e.target.classList.contains("view-btn")){
const productId=e.target.dataset.productId;
localStorage.setItem("descriptionId",JSON.stringify(productId))
getID();
descriptionRenderer();
eventDelegator()
}
})
}
getID();
descriptionRenderer();
eventDelegator();