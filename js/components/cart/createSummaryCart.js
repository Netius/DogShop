import { getFromStorage, sumTotalItemsStorage } from "../../utils/storage.js";

export default function createSummaryCart(){
    const summaryContainer = document.getElementById("summary-container");
    const totalPriceContainer = document.getElementById("totalprice-container");
    summaryContainer.innerHTML ="";
    totalPriceContainer.innerHTML ="";

    const products = getFromStorage("products");

    if(products.length > 0) {
        const totalPrice = sumTotalItemsStorage(products , "price");
        totalPriceContainer.innerHTML = `$ ${totalPrice}`;
        // TODO totalprice x quantity
    } else{
        summaryContainer.innerHTML = `
            <div class="row">
                <div class="col">Your shopping cart is empty.</div>
            </div>
        `;

        totalPriceContainer.innerHTML ="$ 0"
        return;
    }
    products.forEach(product => {
        summaryContainer.innerHTML +=`
        <div class="row mb-2">
            <div class="col">${product.title}</div>
            <div class="col text-right">$ ${product.price}</div>
        </div>
        `
    });
   

    return summaryContainer;
}