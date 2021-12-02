import { strapiUrl } from "../constants/strapiUrl.js"

export function heroImage(result) {
    let heroImage = result.hero_banner.url;
    let imageContainer = document.querySelector(".hero__container--image");
    return imageContainer.style.backgroundImage = `url('${strapiUrl}${heroImage}')`;
}
