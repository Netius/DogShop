import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage } from "../../utils/displayMessage.js";
import cardsProducts from "../cards.js";
import getUrlParams from "../../utils/getUrlParams.js";


export function searchProducts(products) {
    const inputSearch = document.getElementById("input-search");
    const paramsValue = getUrlParams("search");

    inputSearch.onkeyup = function () {
        const inputSearchValue = document.getElementById("input-search").value.trim().toLowerCase();
        const filteredProducts = products.filter(product => {
            if (product.title.toLowerCase().includes(inputSearchValue)) {
                return true;
            }
        })

        if (filteredProducts.length === 0) {
            errorMessage("#cards-message",
                `Nothing found with '${inputSearch.value}'.`,
                "alert-warning");
        } else {
            clearMessage("#cards-message");
        }
        return cardsProducts(filteredProducts);
    }

    // If any params triggers keyup event with search word
    if (paramsValue !== "") {
        inputSearch.value = paramsValue;
        createOnKeyUpEvent(paramsValue, inputSearch);
    }

}

function createOnKeyUpEvent(value, input) {
    input.dispatchEvent(new KeyboardEvent('keyup', { 'key': value }));
    input.focus();

}