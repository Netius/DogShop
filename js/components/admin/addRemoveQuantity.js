import { getFromStorage, saveToStorage } from "../../utils/storage.js";
import createCart from "../cart/createCart.js";
import createSummaryCart from "../cart/createSummaryCart.js";
import removeProduct from "../cart/removeFromCart.js";
import updateCartTotal from "../cart/updateCartTotal.js";

export default function addRemoveQuantity(){
    const productId = event.currentTarget.dataset.id;
    const productNummer = Number(event.currentTarget.dataset.nummer);

    let zeroQuantity = 0;

    let storageArray = getFromStorage("products");
        storageArray.map(product => {
            if(product.id === productId){
                // USing productNummer to check if pressed pluss or minus
                if(productNummer > 0){
                    product.total += product.price;  
                    product.quantity += 1;
                    zeroQuantity = product.quantity;  
                } else{
                    product.total -= product.price;  
                    product.quantity -= 1;
                    zeroQuantity = product.quantity;  
                }
                return 
             }
             return product;
            });
        
    //Remove product from cart if is last one  
    if(zeroQuantity < 1) return removeProduct();        

    saveToStorage('products' , storageArray);
    updateCartTotal();
    createCart();
    createSummaryCart();

}