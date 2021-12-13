export default function clearForm(array){
    array.forEach(element => {
        element.value = "";    
        if(element.checked) element.checked = false;    
    });

}