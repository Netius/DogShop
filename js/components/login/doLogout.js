import modalMessage, { modalConfirm } from "../../utils/modalMessages.js";

export default function doLogout(){
    event.preventDefault();
    modalMessage(`Do you want to log out?`);
    
    modalConfirm(function (confirm) {
        if (confirm) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            location.href ="/login.html";
        }
    });
}