import { strapiUrl } from "../../constants/strapiUrl.js";

export default function carrouselProducts(products){
    const carrouselContainer = document.getElementById("carrousel-container");
    // TODO not show same product if already in details
    let counter = 0;
    let firstSlider, secondSlider, thirdSlider, allSlider = "";

    products.forEach(product => {  
    allSlider += `
        <div class="col-lg-4 col-md-6 mb-4">
            <a href="details.html?id=${product.id}" title="Shop ${product.title}">    
                <div class="card rounded shadow-lg border-0 h-100 zoom-button">
                    <div class="card-body text-center p-0">
                        <img src="${strapiUrl}${product.image.url}"
                            alt="${product.title}" class="img-fluid w-100 d-block mx-auto mb-3">
                        <h3 class="fs-5 nav-item">
                            <a href="../details.html?id=${product.id}" title="Shop ${product.title}" class="nav-link text-dark">${product.title}</a>
                        </h3>
                        <p>$${product.price}</p>
                    </div>
                </div>
            </a>    
        </div>
        `
    if(counter === 2){
        firstSlider = `
        <div class="carousel-item active">
            <div class="row">${allSlider}</div>
        </div>
        `; 
        allSlider = "";     
    }
    if(counter === 5){
        secondSlider = `
        <div class="carousel-item">
            <div class="row">${allSlider}</div>
        </div>
        `; 
        allSlider = "";     
    }
    
    if(counter === 8){
        thirdSlider = `
        <div class="carousel-item">
            <div class="row">${allSlider}</div>
        </div>
        `; 
        allSlider = "";     
    }
    counter ++;
    

    if(counter > 8) return;

});

carrouselContainer.innerHTML = firstSlider + secondSlider + thirdSlider;

return ;
    
}