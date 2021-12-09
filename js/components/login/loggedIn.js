export default function logggedIn(token){
    const loginLink = document.getElementById("login-link");

    if(token){
        loginLink.innerHTML = `<span>YES</span>`
    }
}