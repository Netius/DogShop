import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { productStrapiUrl } from "./js/constants/strapiUrl.js";
import { fetchStrapi } from "./js/utils/fetchStrapi.js";
import logggedIn from "./js/components/login/loggedIn.js";
import { getToken, getFromStorage, saveToStorage } from "./js/utils/storage.js";
import { productsTable } from "./js/components/admin/productsTable.js";
import addForm from "./js/components/admin/addForm.js";
import updateCartTotal from "./js/components/cart/updateCartTotal.js";
import searchForm from "./js/components/search/searchForm.js";

const token = getToken();

//If not token saved in storage goes back to login 
if (!token) {
  location.href = "/login.html";
} else {
  logggedIn(token);
  addForm();
  fetchStrapi(productStrapiUrl, "#admin-message")
    .then(products => {
      productsTable(products);
    })

  // Saves empty products array in local storage
  if (!getFromStorage("products")) {
    saveToStorage("products", []);
  }

  updateCartTotal();
  searchForm();

  footer();

}

