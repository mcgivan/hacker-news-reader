export const getPersistentData = key => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (e) {
    return null;
  }
};
export const storePersistantData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
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
