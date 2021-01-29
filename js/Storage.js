
/**
 * This is the class which will hold all the crud operations..
 */
class Storage {
    /**
     * Get the value from local storage of key 'key'
     * @param {String} key 
     */
    get_value(key) {
        return JSON.parse(localStorage.getItem(key)); 
    }
    /**
     * Set a value in local storage by a key.
     * @param {String} key
     * @param {*} value 
     */
    set_value(key, value) {
        // local storage can only have a string as a data type. so we may need to validate the value.
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * Remove the value from local storage.
     * @param {String} key 
     */
    delete_value(key) {
        localStorage.removeItem(key);
    }
}