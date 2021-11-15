import { productStrapiUrl, strapiUrl } from "../constants/strapiUrl.js"

export default function cardsProducts (products){
    const cardsContainer = document.getElementById("cards-container");

    cardsContainer.innerHTML = "";

    products.forEach(product => {
        cardsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0 h-100">
                    <div class="card-body p-4">
                        <img src="${strapiUrl}${product.image.url}"
                            alt="" class="img-fluid d-block mx-auto mb-3">
                        <h3 class="fs-4"><a href="#" class="text-dark">${product.title}</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
        </div>

        `;
    })
   
    return cardsContainer;
}

export  async function fetchProducts (){
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
        })
        // TODO Error handling
		.catch((error) => console.log("error", error));

}
