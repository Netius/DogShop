const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUser() {
    const user = getFromStorage(userKey);

    if (user) {
        return user;
    }

    return null;
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const value = JSON.parse(localStorage.getItem(key));

    if (!value) {
        return null;
    }

    return value;
}

export function sumTotalItemsStorage(object, key) {
    return object.reduce((a, b) => a + (b[key] || 0), 0);
}

export function deleteFromStorage(key , value){
    const storageArray = getFromStorage(key);
    let filteredStorage = storageArray.filter(product => product.id !== value );
    saveToStorage(key, filteredStorage);
    
}