import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { heroImage } from "./js/components/hero.js";
import footer from "./js/components/footer.js";
import cardsProducts from "./js/components/cards.js";
import { heroStrapiUrl, productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import { getToken } from "./js/utils/storage.js";
import logggedIn from "./js/components/login/loggedIn.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);

// Fetch hero image from strapi
fetchStrapi(heroStrapiUrl, "#hero__spinner")
    .then(hero => {
   if(hero) heroImage(hero);
})

// Send api url and container for loading and error message.
fetchStrapi(productStrapiUrl, "#cards-message")
    .then(products => {
       if(products) cardsProducts(products);
    });

footer();

