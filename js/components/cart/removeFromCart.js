import { toastMessage } from "../../utils/displayMessage.js";
import modalMessage, { modalConfirm } from "../../utils/modalMessages.js";
import { deleteFromStorage } from "../../utils/storage.js";
import createCart from "./createCart.js";
import createSummaryCart from "./createSummaryCart.js";
import updateCartTotal from "./updateCartTotal.js";


export default function removeProduct(){
    const productId = event.currentTarget.dataset.id;
    const productTitle = event.currentTarget.dataset.title;
    modalMessage(`Remove '${productTitle}' from cart?`);
    
    modalConfirm(function(confirm) {
        if (confirm) {
            deleteFromStorage("products" , productId)
            createCart();
            createSummaryCart();
            updateCartTotal();
            toastMessage("#toast-container", `'${productTitle}' removed.` , "bg-my-secondary")
        } 
    });
}