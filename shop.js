import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { getToken } from "./js/utils/storage.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import cardsProducts from "./js/components/cards.js";
import updateCartTotal from "./js/components/cart/updateCartTotal.js";
import { searchProducts } from "./js/components/search/searchProducts.js";
import searchForm from "./js/components/search/searchForm.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);

updateCartTotal();
// searchForm();
// Send api url and container for loading and error message.
// fetchStrapi(productStrapiUrl, "#cards-message")
//     .then(products => {
//        if(products) {
//         cardsProducts(products);
//         searchProducts(products)   
//        }
//     });

footer();
