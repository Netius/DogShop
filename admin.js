import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { getToken } from "./js/utils/storage.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);

footer();