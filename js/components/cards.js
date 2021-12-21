import hasProductImage from "../utils/hasProductImage.js";

export default function cardsProducts (products , numberOfCards){
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML= "";
    let counter = 0;
    numberOfCards = numberOfCards || "show all cards";

    products.forEach(product => {  
        if(counter === numberOfCards) return; 
        
        const productImageUrl = hasProductImage(product);
        
        cardsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <a href="details.html?id=${product.id}" title="Shop ${product.title}">    
                <div class="card rounded shadow-lg border-0 h-100 zoom-button">
                    <div class="card-body text-center p-0">
                        <img src="${productImageUrl}"
                            alt="${product.title}" class="img-fluid w-100 d-block mx-auto mb-3">
                        <h3 class="fs-5 nav-item">
                            <a href="../details.html?id=${product.id}" title="Shop ${product.title}" class="nav-link text-dark">${product.title}</a>
                        </h3>
                        <p>$${product.price}</p>
                    </div>
                </div>
            </a>    
        </div>
        `;
        counter++;
       

    })
   
    return cardsContainer;
}