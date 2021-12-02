import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import navbar from "./js/components/navbar.js";
import { fetchHeroImage } from "./js/components/hero.js";
import footer from "./js/components/footer.js";
import { fetchProducts } from "./js/components/cards.js";

navbar();
fetchHeroImage();
fetchProducts();
footer();

