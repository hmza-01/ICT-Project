import { products } from "./productsData.js";
export class Cart{
  cartItems;
  constructor(key){
    this.Storagekey=key;
    this.loadfromStorage();
  }
AddtoCart(productId,quantity){
  let matchingItem;
  this.cartItems.forEach((item)=>{
    if(item.id===productId){
      matchingItem=item;
    }
  })
  if(matchingItem){
    matchingItem.quantity+=quantity;
    this.toStorage();
  }
  else{
    this.cartItems.push(matchingItem);
  }

}
loadfromStorage(){
  this.cartItems=JSON.parse(localStorage.getItem(this.Storagekey));
  if(!this.cartItems){
    this.cartItems=(products);
    this.toStorage();
  }
}
deleteItem(productId){
  let newArray=[];
  this.cartItems.forEach((cartItem)=>{
    if(cartItem.id!==productId){
      newArray.push(cartItem);
    }
  })
  this.cartItems=newArray;
  this.toStorage();
}
toStorage(){
  localStorage.setItem(this.Storagekey,JSON.stringify(this.cartItems));
}
}
