export default function searchForm(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
        <form id="form-search" class="navigation__search">
            <input id="input-search" class="form-control" placeholder="Search products" aria-label="Search" />
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