import { productStrapiUrl } from "../../constants/strapiUrl.js";
import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage, toastMessage } from "../../utils/displayMessage.js";
import { fetchStrapi } from "../../utils/fetchStrapi.js";
import modalMessage, { modalConfirm } from "../../utils/modalMessages.js";
import { displaySpinner } from "../../utils/spinner.js";
import { getToken } from "../../utils/storage.js";
import { productsTable } from "./productsTable.js";

export default async function deleteProduct() {
    const productId = event.currentTarget.dataset.id;
    const inputTitle = document.querySelector("#input-title-" + productId).value;

    // if (!confirm(`Delete product '${inputTitle}'?`)) return;

    modalMessage(`Delete product '${inputTitle}'?`);

    modalConfirm(async function (confirm) {
        if (confirm) {
            displaySpinner("#button-delete-" + productId);

            const token = getToken();
            const options = {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            };

            try {
                const response = await fetch(`${productStrapiUrl}${productId}`, options);
                if (response.ok) {
                    toastMessage("#toast-container", `Product '${inputTitle}' is deleted.`, "bg-light");
                    fetchStrapi(productStrapiUrl, "#admin-message")
                        .then(products => {
                            productsTable(products);
                        })
                }
            }
            catch (error) {
                console.log(error);
                errorMessage("#admin-message", error, "alert-danger");

            }
            clearMessage(`#button-delete-${productId}`);

        }
    });



}