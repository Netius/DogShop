import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { getToken } from "./js/utils/storage.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import cardsProducts from "./js/components/cards.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);


// Send api url and container for loading and error message.
fetchStrapi(productStrapiUrl, "#cards-message")
    .then(products => {
       if(products) cardsProducts(products);
    });

footer();
