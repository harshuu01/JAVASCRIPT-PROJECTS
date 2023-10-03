let cart = [1,2,3];
let newAdditem = 4;

cart.push(newAdditem);

function fixCartbug(arr){
    cart = arr.map((el)=>el*2);
    return cart;
}
fixCartbug(cart);
console.log(cart);