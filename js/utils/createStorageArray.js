import { getFromStorage, saveToStorage } from "./storage.js";

export default function createLocalStorageArray() {
    // Saves empty products array in local storage
    if (!getFromStorage("products")) {
        saveToStorage("products", []);
    }
    
}