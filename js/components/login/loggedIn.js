import { clearStorage, getUser } from "../../utils/storage.js";

const user = getUser(); 

export default function logggedIn(token){
    const loginLink = document.getElementById("login-container");

    if(token){
        loginLink.innerHTML = `
        <a class="nav-link text-reset navigation__admin zoom" title="Logout" 
            href="login.html" id="logout-link" role="link">
            ${user.username} <i class="fas fa-sign-in-alt fa-lg text-danger"></i>
        </a>`

        const logoutBtn = document.getElementById("logout-link");
        logoutBtn.addEventListener("click" , clearStorage);

        return loginLink;
    }

    loginLink.innerHTML = `
    <a class="nav-link text-reset navigation__admin zoom" title="Login to admin page" 
        href="login.html" id="login-link" role="link">
        Login <i class="fas fa-sign-in-alt fa-lg"></i>
    </a>
    `
    return loginLink;
}