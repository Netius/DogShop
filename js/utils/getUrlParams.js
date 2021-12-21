export default function getUrlParams(key){
    let params = new URLSearchParams(document.location.search);
    let value = params.get(key);
    return value;
}