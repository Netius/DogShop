import { getFromStorage } from "../../utils/storage.js";

export default function updateCartTotal() {
    const cartTotal = document.querySelector(".navigation__cart--total");
    const storageArray = getFromStorage("products");

    cartTotal.innerHTML = 0;
    
    if (storageArray.length == 0) return;
    // Counts how many items in each product
    const totalProdStorage = storageArray.map(i => i.quantity).reduce((a, b) => a + b);
    cartTotal.innerHTML = totalProdStorage;
    
    return cartTotal.innerHTML;
}