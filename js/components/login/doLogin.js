import { loginUrl } from "../../constants/strapiUrl.js";
import { errorMessage } from "../../utils/displayMessage.js";
import { cleanSpinner, displaySpinner } from "../../utils/spinner.js";
import { saveToken, saveUser } from "../../utils/storage.js";

export default async function doLogin(username, password){
    displaySpinner(".login-spinner");

    const data = JSON.stringify({identifier: username, password: password });
    const options = {
        method: "POST",
        body: data,
        headers:{
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(loginUrl , options);
        const json = await response.json();
        // Saves response if authentication went through
        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);
            location.href = "admin.html"; // Redirects to welcome page
        }else{
            errorMessage("#login-message","Email or password invalid.", "alert-danger" );
            cleanSpinner(".login-spinner"); //Clean spinner if login failed
        }
    }
    catch(error) {
        console.log(error)
    }

}