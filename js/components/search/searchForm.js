export default function searchForm(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
    <form id="form-search">
        <div class="form-group d-flex justify-content-end">
            <input id="input-search" type="text" class="form-control pl-3 navigation__search--input" placeholder="Search products">
            <button type="submit" title="Search" class="form-control navigation__search--button zoom"><span
                    class="fa fa-search"></span></button>
        </div>
    </form>
        `
    const formSubmit = document.getElementById("form-search");
    formSubmit.addEventListener("submit", onSearchSubmit)
}

function onSearchSubmit(e){
    e.preventDefault();
    const inputSearch = document.getElementById("input-search").value.trim().toLowerCase();
    if(inputSearch === "") return;

    // Redirect with search key word
    document.location = "../shop.html?search=" + inputSearch;
    
}