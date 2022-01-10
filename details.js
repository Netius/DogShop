import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import getUrlParams from "./js/utils/getUrlParams.js";
import productDetails from "./js/components/details/productDetails.js";
import carrouselProducts from "./js/components/details/carrouselProducts.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { getToken } from "./js/utils/storage.js";
import updateCartTotal from "./js/components/cart/updateCartTotal.js";
import searchForm from "./js/components/search/searchForm.js";
import createLocalStorageArray from "./js/utils/createStorageArray.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);

createLocalStorageArray();
updateCartTotal();
searchForm();

const productId= getUrlParams("id");
//Create details page

fetchStrapi(productStrapiUrl + productId, "#details-container")
    .then(product => {
        if(product) productDetails(product);
})
//Creates carrousel at bottom 
fetchStrapi(productStrapiUrl ,"#carrousel-message")
    .then(products => {
        if(products.length < 3) return
        carrouselProducts(products);
    })
footer();

