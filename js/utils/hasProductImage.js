import { strapiUrl } from "../constants/strapiUrl.js";

export default function hasProductImage(product){
    let placeholder = "https://via.placeholder.com/600x400/D9C2AD8C/808080 C/O https://placeholder.com/"
    
    if(product.image) {
        // Checking if images is in Strapi or on Cloudinary
        if(product.image.provider === "local")
            return strapiUrl + product.image.url;
        else{
            return product.image.url;
        }
    }


    return placeholder;
}