export const getData = key => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (e) {
    return null;
  }
};
export const storeData = (key, value) => {
  localStorage.setItem(key, value);
};
