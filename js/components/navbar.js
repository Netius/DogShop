export default function navbar(){
    const navBarContainer = document.getElementById("nav-container");

    navBarContainer.innerHTML =`
    <nav class="navbar navbar-expand-lg navbar-light navigation pt-5 pb-5">
        <div class="container">
            <a class="navbar-brand zoom" href="index.html" title="DogShop | Home">
                <img alt="Dogshop-logo" class="navigation__logo me-4 logo-light" src="../images/dogshop-logo.svg" />
            </a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ">
                    <li class="nav-item zoom">
                        <a class="nav-link active" title="Shop all Wear clothes to your dog." href="products.html">Wear</a>
                    </li>
                    <li class="nav-item zoom">
                        <a class="nav-link" title="Shop all Food your dog wants." href="products.html">Food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link zoom" title="Shop all Play toys to your dog." href="products.html">Play</a>
                    </li>
                </ul>
                <form class="d-flex navigation__search me-3 ms-3">
                    <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                    <i class="fas fa-search navigation__search--icon fa-lg"></i>
                </form>
                <div class="d-flex">
                    <!-- Right elements -->
                    <div class="d-flex align-items-center">
                        <a class="text-reset ms-2 navigation__cart zoom" title="See your shopping cart" href="cart.html" role="link">
                            <i class="fas fa-shopping-cart fa-lg"></i>
                            <span
                                class="badge rounded-pill badge-notifications bg-danger navigation__cart--total">1</span>
                        </a>

                        <a class="nav-link text-reset navigation__admin zoom" title="Login to admin page" href="login.html" id="navbarDropdownMenuLink"
                            role="link">
                            <!-- <i class="fa fa-user fa-lg navigation__admin--icon"></i> -->
                            Login
                            <i class="fas fa-sign-in-alt fa-lg"></i>
                        </a>
                    </div>
                    <!-- Right elements -->
                </div>
            </div>
        </div>
    </nav>
    `

    return navBarContainer;

}