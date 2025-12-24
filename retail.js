import {cart} from "./cart.js"
import { products } from "./productsData.js";
function getDetails(){
  const name=document.querySelector("#name").value;
  const company=document.querySelector("#company").value;
  const mail=document.querySelector("#mail").value;
  const phoneNo=document.querySelector("#number").value;
  const type=document.querySelector("#business-type").value;
  const requirement=parseInt(document.querySelector("#monthly-requirement").value);
  let productName=Array.from(document.querySelector(".product-name-form").selectedOptions).map((option)=>{
    return option.value;
  });
  const textArea=document.querySelector("#remarks").value;
  return {name,company,mail,phoneNo,type,requirement,textArea,productName}
}
function animation(el,timeout){
  if(timeout){
    clearTimeout(timeout);
  }
  el.classList.add("visible");
  timeout=setTimeout(()=>{
    el.classList.remove("visible");
    window.location.href="./checkout.html";
  },3000)
}
document.querySelector(".btn-primary-js").addEventListener("click",(e)=>{
  e.preventDefault();
  const data=getDetails();
   let matchedProducts=products.filter(el=>{
    const match=data.productName.filter((e)=>{
      const elName=el.name.toLowerCase().trim();
      const eName=e.toLowerCase().trim();
      if(elName===(eName)){
       return true;
      }
    })
    return match.length>0;
  })
  matchedProducts.forEach((element)=>{
    element.quantity=data.requirement||1;
    let matchingItem;
    cart.cartItems.forEach((el)=>{
      if(el.id===element.id){
        matchingItem=el;
      }
    })
    if(matchingItem){
      matchingItem.quantity+=data.requirement;
    }
    else{
      cart.cartItems.push(element);
    }
  })
  let timeout;
  animation(document.querySelector(".toast"),timeout);
  cart.toStorage();
})


