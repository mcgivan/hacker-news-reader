export const getData = (key) => {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return data;
    } catch (e) {
        return "";
    }
}
export const setData = (key, value) => {
    localStorage.setItem(key, value);
}