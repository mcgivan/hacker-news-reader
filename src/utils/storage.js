export const getData = key => {
  try {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data;
  } catch (e) {
    return null;
  }
};
export const storeData = (key, value) => {
  sessionStorage.setItem(key, value);
};
