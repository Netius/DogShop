import addNewProduct from "./addProduct.js";

export default function addForm(){
    const form = document.getElementById("add-form");
    form.innerHTML =`
    <form class="card-body collapse p-md-5 row" id="form-product">
        <h2 class="h4 mb-3">Add new product</h2>
        <div class="col-auto mb-3">
            <label for="input-title" class="form-label">Title</label>
            <input type="text" class="form-control" id="input-title" placeholder="i:e: Blue Jacket Pet" required>
        </div>
        <div class="col-auto mb-3">
            <label for="input-price" class="form-label">Price</label>
            <input type="number" min="0" class="form-control" id="input-price" required>
        </div>
        <div class="col-auto mb-3">
            <label for="checkbox-featured" class="form-check-label">Featured</label>
            <input type="checkbox" class="form-check-input d-block mt-3 m-auto fs-4" id="checkbox-featured">
        </div>
        <div class="mb-3">
            <label class="form-label" for="input-image">Image</label>
            <input type="file" class="form-control d-block" id="input-image">
        </div>
        <div class="mb-3">
            <label for="input-description" class="form-label">Description</label>
            <textarea placeholder="Write a short description about the product" class="form-control" id="textarea-description" rows="3" required></textarea>
        </div>
        <div>
            <button type="submit" class="w-100 btn btn-success" id="button-addproduct">Add <span id="button-add"></span></button>
            <div id="message-add" class="mt-3"></div>
        </div>    
    </form>
    `
    const formAdd = document.getElementById("form-product");
    formAdd.addEventListener("submit", addNewProduct);
}