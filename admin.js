import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { getToken } from "./js/utils/storage.js";
import { productsTable } from "./js/components/admin/productsTable.js";

const token = getToken();

//If not token saved in storage goes back to login 
if (!token) {
  location.href = "/login.html";
} else {
  logggedIn(token);
  fetchStrapi(productStrapiUrl, "#admin-message")
    .then(products => {
      productsTable(products);
    })
  footer();

}

