export default function clearForm(array){
    array.forEach(element => {
        console.log(element)
        element.value = "";    
        if(element.checked) element.checked = false;    
    });

}