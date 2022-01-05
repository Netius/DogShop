import { deleteFromStorage, getFromStorage, sumTotalItemsStorage } from "../../utils/storage.js";
import createSummaryCart from "./createSummaryCart.js";
import updateCartTotal from "./updateCartTotal.js";

export default function createCart(){
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document. getElementById ("cart-total");
    const products = getFromStorage("products");
    
    cartTotal.innerHTML = "";
    cartContainer.innerHTML ="";
    
    if(products.length > 0) {
        const totalStorage = sumTotalItemsStorage(products , "quantity")
        cartTotal.innerHTML = `${totalStorage} products in cart.`;
    } else{
        cartContainer.innerHTML = `
            <div class="alert alert-info">
                Your shopping cart is empty.
            </div>
        `;
        return;
    }

    products.forEach(product => {
        cartContainer.innerHTML += `
            <div class="row align-items-center border-bottom p-2">
                <div class="col-2">
                    <img title="${product.title}" alt="${product.title}" class="img-fluid cart__image" src="${product.image}">
                </div>
                <div class="col">
                    <div class="row">
                        <a class="link-my-secondary" href="details.html?id=${product.id}" title="Shop ${product.title}">
                            ${product.title}
                        </a>
                    </div>
                </div>
    
                <div class="col">
                    <span class="m-2 text-muted" >${product.quantity}</span>
                </div>
                <div class="col">
                    <span>$ ${product.total}</span>
                    <button  type="button" data-id="${product.id}"
                        data-title="${product.title}"  
                        class="btn btn-sm btn-outline-danger cart__delete" 
                        title="Remove product from cart.">
                    <i class="fas fa-trash"></i> 
                    </button>
                </div>
            </div>
        `
    });

    const deleteBtn = document.querySelectorAll(".cart__delete");
    deleteBtn.forEach(button => button.addEventListener("click" , removeProduct))

    return cartContainer;
}

// TODO need to moved this to cart folder
function removeProduct(){
    const productId = event.currentTarget.dataset.id;
    const productTitle = event.currentTarget.dataset.title;
    if (!confirm(`Remove '${productTitle}' from cart?`)) return;
    deleteFromStorage("products" , productId)
    createCart();
    createSummaryCart();
    updateCartTotal();
    alert(`'${productTitle}' removed.`);

}