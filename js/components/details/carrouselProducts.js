import { strapiUrl } from "../../constants/strapiUrl.js";

export default function carrouselProducts(products){
    const carrouselFirst = document.getElementById("carrousel-first");
    const carrouselSecond = document.getElementById("carrousel-second");
  
    let counter = 0;

    products.forEach(product => {

    console.log(counter)
    if(counter < 3){    
    carrouselFirst.innerHTML += `
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
    }

    
    
    // if(counter >= 3 && counter < 6){
    // carrouselSecond.innerHTML += `
    //     <div class="col-lg-4 col-md-6 mb-4">
    //         <a href="details.html?id=${product.id}" title="Shop ${product.title}">    
    //             <div class="card rounded shadow-lg border-0 h-100 zoom-button">
    //                 <div class="card-body text-center p-0">
    //                     <img src="${strapiUrl}${product.image.url}"
    //                         alt="${product.title}" class="img-fluid w-100 d-block mx-auto mb-3">
    //                     <h3 class="fs-5 nav-item">
    //                         <a href="../details.html?id=${product.id}" title="Shop ${product.title}" class="nav-link text-dark">${product.title}</a>
    //                     </h3>
    //                     <p>$${product.price}</p>
    //                 </div>
    //             </div>
    //         </a>    
    //     </div>
    //     `
    // }

    counter ++;


});

return ;
    
}