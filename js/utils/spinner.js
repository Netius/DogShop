export function displaySpinner(target){
    const spinnerTarget = document.querySelector(target);

    return spinnerTarget.innerHTML = `
        <span class="spinner-border spinner-border-sm align-text-bottom" role="status">
            <span class="sr-only">Loading</span>
        </span>`;
}

export function displayBigSpinner(target, message){
    const spinnerTarget = document.querySelector(target);
    
    return spinnerTarget.innerHTML = `
        <div class="alert alert-info">
            ${message}
            <span class="spinner-grow spinner-grow-sm text-dark" role="status"></span>
            <span class="spinner-grow spinner-grow-sm text-secondary" role="status"></span>
            <span class="spinner-grow spinner-grow-sm text-light" role="status"></span>
        </div> 
       `;
}