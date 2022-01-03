export function errorMessage(target, message , cssClass){ 
    const messageTarget = document.querySelector(target);
    
    return messageTarget.innerHTML = `
        <div class="alert ${cssClass} text-center" role="alert">
            ${message}
        </div> 
       `;
}

