import { getFromStorage } from "../../utils/storage.js";

export default function updateCartTotal() {
    const storageArray = getFromStorage("products");
    if (storageArray.length == 0) return;

    const totalProdStorage = storageArray.map(i => i.quantity).reduce((a, b) => a + b);
    const cartTotal = document.querySelector(".navigation__cart--total").innerHTML = totalProdStorage;

    

}