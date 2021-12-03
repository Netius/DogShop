import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import navbar from "./js/components/navbar.js";
import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import getUrlParamsId from "./js/utils/getUrlParamsId.js";
import productDetails from "./js/components/details/productDetails.js";



navbar();

const productId= getUrlParamsId();

fetchStrapi(productStrapiUrl + productId, "#details-container")
    .then(product => {
        if(product) productDetails(product);
})

footer();

