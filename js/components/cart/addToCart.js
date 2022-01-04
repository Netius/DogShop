import { toastMessage } from "../../utils/displayMessage.js";
import { getFromStorage, saveToStorage } from "../../utils/storage.js";
import updateCartTotal from "./updateCartTotal.js";

export default function addToCart(e){
    const productId = e.currentTarget.dataset.id;
    const productPrice = e.currentTarget.dataset.price;
    const productTitle = e.currentTarget.dataset.title;
    const productImage = e.currentTarget.dataset.image;

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
        storageArray.push({id: productId, 
                            quantity: quantityProduct,
                            price: productPrice,
                            title: productTitle,
                            image: productImage });
    }

    saveToStorage('products' , storageArray);
    updateCartTotal();    

    // Using id from button to redirect to Cart if is buynow;
    const redirectButton = e.currentTarget.id;
    if(redirectButton === "buynow-btn") return location.href = "/cart.html";

    toastMessage("#toast-container", `'${productTitle}' add to cart.`, "bg-success");
    
}   