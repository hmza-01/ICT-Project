import { products } from "./productsData.js";
 class Cart{
  cartItems;
  constructor(key){
    this.Storagekey=key;
    this.loadfromStorage();
  }
AddtoCart(productId,quantity){
  console.log(productId);
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
    products.forEach((el)=>{
      if(el.id===productId){
        this.cartItems.push(el);
        this.toStorage();
      }
    })

  }

}
loadfromStorage(){
  this.cartItems=JSON.parse(localStorage.getItem(this.Storagekey));
}
//temporarily commented
// deleteItem(productId){
//   let newArray=[];
//   this.cartItems.forEach((cartItem)=>{
//     if(cartItem.id!==productId){
//       newArray.push(cartItem);
//     }
//   })
//   this.cartItems=newArray;
//   this.toStorage();
// }
toStorage(){
  localStorage.setItem(this.Storagekey,JSON.stringify(this.cartItems));
}
}
export let cart=new Cart("cart");
