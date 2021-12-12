export default function doLogout(){
    if(!confirm("Do you want to log out?")){
        event.preventDefault();
        return;
    } 

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        location.href ="/login.html";   
}