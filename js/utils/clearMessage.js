export function clearMessage(target){
    const messageTarget = document.querySelector(target);

    return messageTarget.innerHTML =``;
}