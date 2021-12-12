import { productStrapiUrl } from "../../constants/strapiUrl.js";
import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage } from "../../utils/errorMessage.js";
import { fetchStrapi } from "../../utils/fetchStrapi.js";
import { displaySpinner } from "../../utils/spinner.js";
import { getToken } from "../../utils/storage.js";
import { productsTable } from "./productsTable.js";


export default async function updateProduct() {
  
    const productId = event.target.dataset.id;
    const inputTitle = document.querySelector("#input-title-" + productId).value;
    const inputPrice = document.querySelector("#input-price-" + productId).value;
    const inputDescription = document.querySelector("#input-description-" + productId).value;
    const inputFeatured = document.querySelector("#input-featured-" + productId).checked;

    const inputImage = document.querySelector("#input-image-" + productId).value.split("\\");
    const fileName = inputImage[inputImage.length - 1];// Gets only the name of image, without the fakepath

    if (!confirm(`Update the product '${inputTitle}'?`)) return;
    displaySpinner("#button-update-" + productId);
    
    const token = getToken();

    const data = JSON.stringify({
        title: inputTitle,
        price: inputPrice,
        description: inputDescription,
        featured: inputFeatured,
        published_at: new Date()
    })

    const options = {
        method: "PUT",
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(`${productStrapiUrl}${productId}`, options);
        const json = await response.json();

        if (response.ok) {
            fetchStrapi(productStrapiUrl, "#admin-message")
                .then(products => {
                    productsTable(products);
                    alert(`Product '${inputTitle}' is updated.`);
                })
        }
    }
    catch (error) {
        console.log(error);
        errorMessage(`#message-update-${productId}`, error, "alert-danger");

    }
    clearMessage(`#button-update-${productId}`);

}