export function errorMessage(target, message , cssClass){ 
    const messageTarget = document.querySelector(target);
    
    return messageTarget.innerHTML = `
        <div class="alert ${cssClass} text-center" role="alert">
            ${message}
        </div> 
       `;
}

export function toastMessage(target, message , cssClass){
    const toastContainer = document.querySelector(target);

    toastContainer.innerHTML = `
    <div class="toast-container position-fixed end-0 p-3 text-white">
    <div class="toast hide align-items-center ${cssClass} border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
            <img title="DogShop" src="/images/favicon/android-chrome-72x72.png" width="25" class="rounded me-2" alt="Dogshop favicon">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    </div>
    `

    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    let option = {
        delay: 4000,
    }

    var toastList = toastElList.map(function(toastEl) {
          return new bootstrap.Toast(toastEl, option)
        })
 
    toastList.forEach(toast => toast.show());

    return toastContainer;
}