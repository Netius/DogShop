import { heroStrapiUrl , strapiUrl } from "../constants/strapiUrl.js"
import { clearMessage } from "../utils/clearMessage.js";
import { errorMessage } from "../utils/errorMessage.js";
import { displayBigSpinner } from "../utils/spinner.js";

export async function fetchHeroImage() {
    displayBigSpinner("#hero__spinner", "Loading image")
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
            imageContainer.style.backgroundImage= `url('${strapiUrl}${heroImage}')`; 
            clearMessage("#hero__spinner");
        })
        // TODO Error handling
		.catch((error) => {
            console.log("error", error);
            errorMessage("#hero__spinner", "Ooops! This shouldn't happen, my bad...")
            return;

        });
}
