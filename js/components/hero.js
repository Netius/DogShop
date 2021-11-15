import { heroStrapiUrl , strapiUrl } from "../constants/strapiUrl.js"

export default function hero() {
	const heroContainer = document.getElementById("hero-container");
	heroContainer.innerHTML = `
    <div class="container-fluid hero__container">
        <div class="row hero__container--image">
            <div class="text-center">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white p-3">
                        <h1 class="mb-3">Heading</h1>
                        <h4 class="mb-3">Subheading</h4>
                        <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
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
		.catch((error) => console.log("error", error));
}
