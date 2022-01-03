import { productStrapiUrl } from "../../constants/strapiUrl.js";
import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage } from "../../utils/displayMessage.js";
import { fetchStrapi } from "../../utils/fetchStrapi.js";
import { displaySpinner } from "../../utils/spinner.js";
import { getToken } from "../../utils/storage.js";
import addImageToProduct from "./addImageToProduct.js";
import clearForm from "./clearForm.js";
import { productsTable } from "./productsTable.js";

export default async function addNewProduct(event) {
    event.preventDefault();
    const title = document.getElementById("input-title");
    const price = document.getElementById("input-price");
    const featured = document.getElementById("checkbox-featured");
    const description = document.getElementById("textarea-description");
    const formFile = document.getElementById("input-image");

    if (!confirm(`Create a product '${title.value.trim()}' ?`)) return;
    displaySpinner("#button-add")

    const token = getToken();

    const data = JSON.stringify({
        title: title.value.trim(),
        price: price.value.trim(),
        featured: featured.checked,
        description: description.value.trim(),
        published_at: new Date()
    })


    const options = {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(productStrapiUrl, options);
        const json = await response.json();
        if (response.ok) {

            // Link image to created product                
            await addImageToProduct(formFile, json.id);
            
            alert(`Product '${title.value.trim()}' is added.`);
            clearForm([title, price, featured, description, formFile]);
            fetchStrapi(productStrapiUrl, "#admin-message")
                .then(products => {
                    productsTable(products);
                })
        }
    }

    catch (error) {
        console.log(error);
        errorMessage("#message-add", error, "alert-danger");
    }
    clearMessage("#button-add");


}