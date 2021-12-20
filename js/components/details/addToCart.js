import { getFromStorage, saveToStorage } from "../../utils/storage.js";

export default function addToCart(e){
    const productId = e.currentTarget.dataset.id;
    var storageArray = JSON.parse(getFromStorage("products"));

    // storageArray.push({id: productId });
   

    // saveToStorage('products' , storageArray);

}