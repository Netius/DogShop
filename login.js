import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import footer from "./js/components/footer.js";
import { submitLogin } from "./js/components/login/submitLogin.js";
import { getToken } from "./js/utils/storage.js";

const token = getToken();
if(token){
    location.href ="/index.html";
}

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click" , submitLogin);

footer();