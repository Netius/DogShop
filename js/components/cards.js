import { productStrapiUrl, strapiUrl } from "../constants/strapiUrl.js"
import { clearMessage } from "../utils/clearMessage.js";
import { errorMessage } from "../utils/errorMessage.js";
import { displayBigSpinner } from "../utils/spinner.js";

export default function cardsProducts (products){
    const cardsContainer = document.getElementById("cards-container");

    cardsContainer.innerHTML = "";

    products.forEach(product => {        
        if(!product.featured) return; // Returns if not featured 

        cardsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <a href="products.html?id=${product.id}" title="Shop ${product.title}">    
                <div class="card rounded shadow-lg border-0 h-100 zoom-button">
                    <div class="card-body text-center p-0">
                        <img src="${strapiUrl}${product.image.url}"
                            alt="${product.title}" class="img-fluid w-100 d-block mx-auto mb-3">
                        <h3 class="fs-5 nav-item">
                            <a href="products.html?id=${product.id}" title="Shop ${product.title}" class="nav-link text-dark">${product.title}</a>
                        </h3>
                        <p>$${product.price}</p>
                    </div>
                </div>
            </a>    
        </div>

        `;
    })
   
    return cardsContainer;
}

export  async function fetchProducts (){
    displayBigSpinner("#cards__spinner", "Loading products")
    var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
	};

	await fetch(productStrapiUrl, requestOptions)
		.then((response) => response.json())
		.then((result) => { console.log(result)
            cardsProducts(result);
            clearMessage("#cards__spinner");
        })
        // TODO Error handling
		.catch((error) => {
            console.log("error", error)
            errorMessage("#cards__spinner", "Ooops! This shouldn't happen, my bad...")
        });    

}
