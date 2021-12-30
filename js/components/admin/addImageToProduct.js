import { uploadStrapiUrl } from "../../constants/strapiUrl.js";
import { getToken } from "../../utils/storage.js";
import { errorMessage } from "../../utils/errorMessage.js";

export default async function addImageToProduct(formFile, productId){
    if(formFile.files.length === 0 ) return;
    
    const token = getToken();
    var formData = new FormData();

    formData.append("files", formFile.files[0]);
    formData.append('refId', productId);
    formData.append('ref', "products");
    formData.append('field', "image");

    const options = {
        method: "POST",
        body: formData,
        headers:{
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(uploadStrapiUrl , options);
        if(!response.ok){
            throw "Error: Image to product not uploaded.";
        }
        
    } catch (error) {
        console.log(error);
        errorMessage("#message-add", error, "alert-danger");  
    }

}