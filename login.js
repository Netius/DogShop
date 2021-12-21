import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import updateCartTotal from "./js/components/cart/updateCartTotal.js";
import footer from "./js/components/footer.js";
import { submitLogin } from "./js/components/login/submitLogin.js";
import searchForm from "./js/components/search/searchForm.js";
import { getToken, getFromStorage, saveToStorage } from "./js/utils/storage.js";

const token = getToken();
if(token){
    location.href ="/index.html";
}

// Saves empty products array in local storage
if(!getFromStorage("products")){
    saveToStorage("products", []);
  }
updateCartTotal();
searchForm();

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click" , submitLogin);

footer();