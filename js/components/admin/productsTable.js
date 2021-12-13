import isFeatured from "../../utils/isFeatured.js";
import updateProduct from "./updateProduct.js";
import deleteProduct from "./deleteProduct.js";
import hasProductImage from "../../utils/hasProductImage.js";


export function productsTable(products){
    const table = document.getElementById("products-table");
    table.innerHTML ="";

    products.forEach(product => {
        let featured = "";
        if(isFeatured(product.featured)) featured = "checked";

        let productImageUrl = hasProductImage(product);

        table.innerHTML += `
        <tr>
        <td>${product.id}</td>
        <td>
            <img src="${productImageUrl}" class="img-responsive w-100">
        </td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td class="text-center">${product.price}</td>
        <td class="text-center">
            <input type="checkbox" ${featured} disabled class="form-check-input" 
                id="featuredCheck-${product.id}">
        </td>
        <td class="text-end">
            <button data-id=${product.id} type="button" class="btn btn-sm btn-info"
                data-bs-toggle="collapse" data-bs-target="#edit-product-${product.id}" 
                aria-expanded="false" aria-controls="editProduct" title="Edit product">
                <i class="far fa-edit"></i>
            </button>
        </td>
        <td>
            <button data-id=${product.id} type="button" class="btn btn-sm btn-danger button-delete" title="Delete product">
                <i class="fas fa-trash"></i><span id="button-delete-${product.id}"></span> 
            </button>
        </td>
        </tr>
        <tr class="collapse" id="edit-product-${product.id}">
            <td colspan="8" class="p-0">
            <form class="card-body bg-white p-5 row">
                <h2 class="h4 mb-3">Edit product</h2>
                <div class="col-auto mb-3">
                    <label for="input-title-${product.id}" class="form-label">Title</label>
                    <input type="text" class="form-control" id="input-title-${product.id}" value="${product.title}" required>
                </div>
                <div class="col-auto mb-3">
                    <label for="input-price-${product.id}" class="form-label">Price</label>
                    <input type="number" min="0" class="form-control" id="input-price-${product.id}" value="${product.price}" required>
                </div>
                <div class="col-auto mb-3">
                    <label for="input-featured-${product.id}" class="form-check-label">Featured</label>
                    <input type="checkbox" class="form-check-input d-block mt-3 m-auto fs-4" id="input-featured-${product.id}" ${featured}>   
                </div>
                <div class="mb-3">
                    <label class="form-label" for="input-image-${product.id}">Image</label>
                    <input type="file" class="form-control d-block" id="input-image-${product.id}">
                </div>
                <div class="mb-3">
                    <label for="input-description-${product.id}" class="form-label">Description</label>
                    <textarea placeholder="Write a short description about the product" class="form-control"
                        id="input-description-${product.id}" rows="3" required>${product.description}
                    </textarea>
                </div>

                <button data-id="${product.id}" type="button" class="btn btn-success button-update">Update <span id="button-update-${product.id}"></span></button>
                <div id="message-update-${product.id}" class="mt-3"></div>
            </form>
            </td>
        </tr>
        `  
    });

    const buttonDelete = document.querySelectorAll(".button-delete");
    buttonDelete.forEach(button => button.addEventListener("click" , deleteProduct));

    const buttonUpdate = document.querySelectorAll(".button-update");
    buttonUpdate.forEach(button => button.addEventListener("click" , updateProduct));

    return table;
}
