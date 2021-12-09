import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import getUrlParamsId from "./js/utils/getUrlParamsId.js";
import productDetails from "./js/components/details/productDetails.js";
import carrouselProducts from "./js/components/details/carrouselProducts.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { getToken } from "./js/utils/storage.js";


// Shows login user at nav
const token = getToken();
logggedIn(token);

const productId= getUrlParamsId();

fetchStrapi(productStrapiUrl + productId, "#details-container")
    .then(product => {
        if(product) productDetails(product);
})

fetchStrapi(productStrapiUrl ,"#carrousel-message")
    .then(products => {
        if(products.length < 3) return
        carrouselProducts(products);
    })
footer();

