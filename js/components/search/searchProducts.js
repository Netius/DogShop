import { clearMessage } from "../../utils/clearMessage.js";
import { errorMessage } from "../../utils/errorMessage.js";
import cardsProducts from "../cards.js";

export function searchProducts(products) {
    const inputSearch = document.getElementById("input-search");
    // inputSearch.value = ""
    inputSearch.onkeyup = function () {
        const inputSearchValue = document.getElementById("input-search").value.trim().toLowerCase();

        const filteredProducts = products.filter(product => {
            if (product.title.toLowerCase().includes(inputSearchValue)) {
                return true;
            }
        })


        if(filteredProducts.length === 0){
            errorMessage("#cards-message",`Nothing found with '${inputSearch.value}'.` , "alert-warning" );
        }else{
            clearMessage("#cards-message");
        }
        
         return cardsProducts(filteredProducts);
    }

}