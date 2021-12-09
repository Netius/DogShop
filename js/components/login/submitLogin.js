import { errorMessage } from "../../utils/errorMessage.js";
// import doLogin from "./doLogin.js"

export function submitLogin (event){
    event.preventDefault();

    const inputEmail = document.querySelector("#input-email");
    const inputPassword = document.querySelector("#input-password");

    const inputEmailValue = inputEmail.value;
    const inputpasswordValue = inputPassword.value;

    if(inputEmailValue === ""){
        errorMessage("#login-message","Email can not be empty.", "alert-warning" );
        return
    }
    if(inputpasswordValue === ""){
        errorMessage("#login-message","Password can not be empty.","alert-warning" );
        return
    }

    // doLogin(inputEmailValue, inputpasswordValue)
}