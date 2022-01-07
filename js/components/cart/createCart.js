import { getFromStorage, sumTotalItemsStorage } from "../../utils/storage.js";
import addRemoveQuantity from "../admin/addRemoveQuantity.js";
import removeProduct from "./removeFromCart.js";

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
                
                <div class="col-2 d-none d-sm-block">
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
                    <button title="Remove 1 product" class="btn btn-my-primary btn-sm rounded-circle quantity-btn"
                        data-nummer="-1" 
                        data-id="${product.id}"
                        data-title="${product.title}">
                        <i class="fas fa-minus fa-sm"></i>
                    </button>    
                    <span class="m-2 text-muted" >${product.quantity}</span>
                    <button title="Add 1 product" class="btn btn-my-primary btn-sm rounded-circle quantity-btn"
                        data-nummer="1" 
                        data-id="${product.id}"
                        data-title="${product.title}">
                        <i class="fas fa-plus fa-sm"></i>
                    </button>
                </div>

                <div class="col-3">
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
    deleteBtn.forEach(button => button.addEventListener("click" , removeProduct));

    const quantityBtn = document.querySelectorAll(".quantity-btn");
    quantityBtn.forEach(button => button.addEventListener("click" , addRemoveQuantity));

    return cartContainer;
}