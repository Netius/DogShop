import hasProductImage from "../../utils/hasProductImage.js";


export default function productDetails(product){
    const detailsContainer = document.getElementById("details-container");
    const productImageUrl = hasProductImage(product);
    
    detailsContainer.innerHTML = `
                <div class="row py-5">
                    <div class="col-lg-6 col-sm-12">
                        <img src="${productImageUrl}" class="w-100 img-responsive">
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <h2 class="display-6 mt-3">${product.title}</h2>
                        <p>${product.description}</p>
                        <p class="mt-5 mb-3 h3">$${product.price}</p>
                        <button id="cart-button" class="zoom-button btn btn-my-primary mr-1" data-toggle="tooltip" title="Add to cart" data-id="${product.id}">
                            <i class="fa fa-shopping-cart"></i>
                        </button>
                        <button class="ms-1 zoom-button fs-6 btn btn-my-info btn-feature" 
                                    title="Buy now" href="shop.html" role="button">
                                    Buy now
                        </button>
                        <h3 class="mt-5">Features</h3>
                        <ul class="list-unstyled">
                            <li><i class="fa fa-check text-success"></i> Made of 100% recicle material</li>
                            <li><i class="fa fa-check text-success"></i> Easy to wash and clean</li>
                            <li><i class="fa fa-check text-success"></i> Perfect for your dog</li>
                        </ul>
                    </div>
                </div>
    `

    const cartBtn = document.getElementById("cart-button");
    cartBtn.addEventListener("click" , addToCart)
    return detailsContainer;
}