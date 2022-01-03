import { clearMessage } from "../utils/clearMessage.js";
import { errorMessage } from "./displayMessage.js";
import { displayBigSpinner } from "../utils/spinner.js";


export async function fetchStrapi (url , spinnerTarget){
    displayBigSpinner(spinnerTarget, "Loading");
    var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
	};

	return await fetch(url, requestOptions)
		.then((response) => response.json())
		.then((result) => { 
            clearMessage(spinnerTarget);
            return result;
        })
		.catch((error) => {
            console.log("error", error)
            errorMessage(spinnerTarget, "Ooops! This shouldn't happen, my bad...", "alert-warning")
        });    

}