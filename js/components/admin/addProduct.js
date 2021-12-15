import { productStrapiUrl } from "../../constants/strapiUrl.js";
import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage } from "../../utils/errorMessage.js";
import { fetchStrapi } from "../../utils/fetchStrapi.js";
import { displaySpinner } from "../../utils/spinner.js";
import { getToken } from "../../utils/storage.js";
import clearForm from "./clearForm.js";
import { productsTable } from "./productsTable.js";

export default async function addNewProduct(event){
    event.preventDefault();   
    const title = document.getElementById("input-title");
    const price = document.getElementById("input-price");
    const featured = document.getElementById("checkbox-featured");
    const description = document.getElementById("textarea-description");

    if(!confirm(`Create a product '${title.value.trim()}' ?`)) return;
    displaySpinner("#button-add")
    
    const token = getToken();

    const data = JSON.stringify({ 
                   title: title.value.trim(), 
                   price: price.value.trim() , 
                   featured: featured.checked,
                   description: description.value.trim(),
                   published_at: new Date() 
                })


    const options = {
        method: "POST",
        body: data,
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(productStrapiUrl , options);
        const json = await response.json();
       if(response.ok){
        alert(`Product '${title.value.trim()}' is added.`);
        fetchStrapi(productStrapiUrl, "#admin-message")
        .then(products => {
            productsTable(products);
        })
        clearForm([title, price, featured, description]);
       }
    }
    catch(error) {
        console.log(error);
        errorMessage("#message-add", error, "alert-danger");
    }
    clearMessage("#button-add");
}