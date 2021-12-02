export default function getUrlParamsId(){
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    return id;
}