import { productStrapiUrl } from "../../constants/strapiUrl.js";
import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage, toastMessage } from "../../utils/displayMessage.js";
import { fetchStrapi } from "../../utils/fetchStrapi.js";
import { displaySpinner } from "../../utils/spinner.js";
import { getToken } from "../../utils/storage.js";
import addImageToProduct from "./addImageToProduct.js";
import { productsTable } from "./productsTable.js";
import modalMessage, { modalConfirm } from "../../utils/modalMessages.js";



export default async function updateProduct() {
    event.preventDefault();
    const productId = event.target.dataset.id;
    const inputTitle = document.querySelector("#input-title-" + productId).value;
    const inputPrice = document.querySelector("#input-price-" + productId).value;
    const inputDescription = document.querySelector("#input-description-" + productId).value;
    const inputFeatured = document.querySelector("#input-featured-" + productId).checked;
    const inputImage = document.querySelector("#input-image-" + productId);

    modalMessage(`Update the product '${inputTitle}'?`);

    modalConfirm(async function (confirm) {
        if (confirm) {
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
                    await addImageToProduct(inputImage, productId);
                    toastMessage("#toast-container", `Product '${inputTitle}' is updated.`, "bg-my-secondary");
                    fetchStrapi(productStrapiUrl, "#admin-message")
                        .then(products => {
                            productsTable(products);
                        })
                }
            }
            catch (error) {
                console.log(error);
                errorMessage(`#message-update-${productId}`, error, "alert-danger");

            }
            clearMessage(`#button-update-${productId}`);
        }
    });
}