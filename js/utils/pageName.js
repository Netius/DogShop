export function pageName(location){

var path = location;
var page = path.split("/").pop();

return page;
}