export default function cardsProducts (products){
    const cardsContainer = document.getElementById("cards-container");

    cardsContainer.innerHTML = "";

    cardsContainer.innerHTML = `
    <div class="row pb-5 mb-4">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <!-- Card-->
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-4">
                    <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg"
                        alt="" class="img-fluid d-block mx-auto mb-3">
                    <h3 class="fs-4"><a href="#" class="text-dark">Awesome product</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

    return cardsContainer;
}

export function fetchProducts (){


}