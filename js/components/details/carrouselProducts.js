import getUrlParams from "../../utils/getUrlParams.js";
import hasProductImage from "../../utils/hasProductImage.js";

export default function carrouselProducts(products){
    const carrouselContainer = document.getElementById("carrousel-container");
    let counter = 0;
    let firstSlider, secondSlider, thirdSlider, allSlider = "";
    let paramsProductId = getUrlParams("id");
    
    products.forEach(product => {  
    
    // Dont show same product in carrousel if already open in details
    if(product.id == paramsProductId) return    

    let productImageUrl = hasProductImage(product);
    
    allSlider += `
        <div class="col-lg-4 col-md-6 mb-4">
            <a href="details.html?id=${product.id}" title="Shop ${product.title}">    
                <div class="card rounded shadow-sm border-0 h-100 zoom-button">
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
        `
    if(counter === 2){
        firstSlider = createSlideContainer(allSlider, "carousel-item active");
        allSlider = "";     
    }
    if(counter === 5){
        secondSlider = createSlideContainer(allSlider, "carousel-item");
        allSlider = "";     
    }
    
    if(counter === 8){
        thirdSlider = createSlideContainer(allSlider, "carousel-item");
        allSlider = "";     
    }

    counter ++;
    if(counter > 8) return;

});

const carrouselSlider =  firstSlider + secondSlider + thirdSlider;

carrouselContainer.innerHTML = `
    <div class="row carrousel__container pb-5">
        <div class="col-md-12 mx-auto">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="40000000">
                <!-- Wrapper for carousel items -->
                <div class="carousel-inner pt-4">
                   ${carrouselSlider}
                </div>
                
                <!-- Carousel controls -->
                <a class="position-absolute top-50 start-0 translate-middle-y recomendation__arrow--left btn btn-my-primary zoom-button text-dark" href="#myCarousel" data-bs-slide="prev" title="Show previous">
                    <i class="fas fa-chevron-left fa-2x"></i>
                </a>

                <a class="btn btn-my-primary text-dark position-absolute top-50 end-0 translate-middle-y recomendation__arrow--right" href="#myCarousel" data-bs-slide="next" title="Show next">
                    <i class="fas fa-chevron-right fa-2x"></i>
                </a>
            </div>
        </div>
    </div>`


return carrouselContainer;
    
}

function createSlideContainer(slider, firstActive){
    let sliderHtml = `
    <div class="${firstActive}">
        <div class="row">${slider}</div>
    </div>
    `; 
    return sliderHtml;
}