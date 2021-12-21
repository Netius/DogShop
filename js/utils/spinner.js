export function displaySpinner(target){
    const spinnerTarget = document.querySelector(target);

    return spinnerTarget.innerHTML = `
        <span class="spinner-border text-center spinner-border-sm align-text-bottom" role="status">
            <span class="sr-only">Loading</span>
        </span>`;
}

export function displayBigSpinner(target, message){
    const spinnerTarget = document.querySelector(target);
    
    return spinnerTarget.innerHTML = `
        <div class="alert alert-info text-center">
            ${message}
            <span class="spinner-grow spinner-grow-sm text-dark" role="status"></span>
            <span class="spinner-grow spinner-grow-sm text-secondary" role="status"></span>
            <span class="spinner-grow spinner-grow-sm text-light" role="status"></span>
        </div> 
       `;
}

export function cleanSpinner(target){
    const cleanTarget = document.querySelector(target);
    return cleanTarget.innerHTML =``;
}
