import { heroStrapiUrl , strapiUrl } from "../constants/strapiUrl.js"

export default function hero() {
	const heroContainer = document.getElementById("hero-container");
	heroContainer.innerHTML = `
    <div class="container-fluid hero__container">
        <div class="row hero__container--image">
            <div class="text-center">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white p-5 hero__container--text">
                        <h1 class="mb-3">Shop all</h1>
                        <p class="mb-5">Everything your best friend needs</p>
                        <a class="zoom-button px-5 py-3 btn btn-feature btn-lg" title="DogShop | Shop all" href="products.html" role="button">Shop now</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    `;
    fetchHeroImage();
	return heroContainer;
}

async function fetchHeroImage() {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
	};

	await fetch(heroStrapiUrl, requestOptions)
		.then((response) => response.json())
		.then((result) => {
            let heroImage = result.hero_banner.url;
            let imageContainer = document.querySelector(".hero__container--image");
            return imageContainer.style.backgroundImage= `url('${strapiUrl}${heroImage}')`; 
        
        })
        // TODO Error handling
		.catch((error) => console.log("error", error));
}
