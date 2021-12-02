export function errorMessage(target, message){
    const messageTarget = document.querySelector(target);
    
    return messageTarget.innerHTML = `
        <div class="alert alert-warning text-center" role="alert">
            ${message}
        </div> 
       `;
}