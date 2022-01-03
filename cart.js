import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { getToken } from "./js/utils/storage.js";
import logggedIn from "./js/components/login/loggedIn.js";
import updateCartTotal from "./js/components/cart/updateCartTotal.js";
import searchForm from "./js/components/search/searchForm.js";
import createLocalStorageArray from "./js/utils/createStorageArray.js";

// Shows login user at nav
const token = getToken();
logggedIn(token);

createLocalStorageArray();
updateCartTotal();
searchForm();

footer();