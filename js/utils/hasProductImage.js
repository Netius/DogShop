import { strapiUrl } from "../constants/strapiUrl.js";

export default function hasProductImage(product){
    let placeholder = "https://via.placeholder.com/600x400/D9C2AD8C/808080 C/O https://placeholder.com/"
    
    if(product.image?.url !== undefined) {
        return strapiUrl + product.image.url;
    }
    return placeholder;
}