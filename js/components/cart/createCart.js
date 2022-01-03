import { getFromStorage } from "../../utils/storage.js";

export default function createCart(){
    const cartContainer = document.getElementById("cart-container");
    const products = getFromStorage("products");
    
    products.forEach(product => {
        cartContainer.innerHTML += `
            <div class="row align-items-center border-bottom p-2">
                <div class="col-2">
                    <img title="${product.title}" class="img-fluid cart__image" src="${product.image}">
                </div>
                <div class="col">
                    <div class="row">${product.title}</div>
                </div>
    
                <div class="col">
                    <a href="#">-</a>
                    <a href="#" class="border p-2">${product.quantity}</a>
                    <a href="#">+</a> 
                </div>
                <div class="col">
                    <span>$ ${product.price}</span>
                    <button  type="button" class="btn btn-sm btn-outline-danger  cart__delete" title="Delete product">
                    <i class="fas fa-trash"></i><span id="button-delete-${product.id}"></span> 
                    </button>
                </div>
            </div>
        `
    });

    return cartContainer;
}

{/* <i class="fas fa-trash"></i><span id="button-delete-${product.id}"></span>  */}
