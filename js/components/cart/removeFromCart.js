import { toastMessage } from "../../utils/displayMessage.js";
import modalMessage from "../../utils/modalMessages.js";
import { deleteFromStorage } from "../../utils/storage.js";
import createCart from "./createCart.js";
import createSummaryCart from "./createSummaryCart.js";
import updateCartTotal from "./updateCartTotal.js";


export default function removeProduct(){
    const productId = event.currentTarget.dataset.id;
    const productTitle = event.currentTarget.dataset.title;
    modalMessage(`Remove '${productTitle}' from cart?`);


    var modalConfirm = function(callback) {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal')) 
        myModal.show();
        const cancelModal = document.getElementById("modal-cancel")
                            .addEventListener("click", function(){
                                callback(false);
                            });
        const acceptModal = document.getElementById("modal-accept")
                            .addEventListener("click", function(){
                                callback(true);
                                myModal.hide();
                            });

    }


    modalConfirm(function(confirm) {
        console.log(confirm)
        if (confirm) {
            console.log("YESSS");
            deleteFromStorage("products" , productId)
            createCart();
            createSummaryCart();
            updateCartTotal();
            // alert(`'${productTitle}' removed.`);
            toastMessage("#toast-container", `'${productTitle}' removed.` , "bg-danger")
        } 
    });
}