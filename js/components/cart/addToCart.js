import { getFromStorage, saveToStorage } from "../../utils/storage.js";
import updateCartTotal from "./updateCartTotal.js";

export default function addToCart(e){
    const productId = e.currentTarget.dataset.id;
    let storageArray = getFromStorage("products");
    let quantityProduct = 1;

    let isInStorage = storageArray.find(product => { return product.id == productId }); 

    if(isInStorage){
        storageArray.map(product => {
            if(product.id === productId){
                return product.quantity += quantityProduct;
             }
             return product;
            });

    } else{
        storageArray.push({id: productId, quantity: quantityProduct });
    }

    saveToStorage('products' , storageArray);
    updateCartTotal();
}