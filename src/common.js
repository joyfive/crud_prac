export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getStorage = (key, defaultValue) => {
  return localStorage.getItem(key) || defaultValue;
};

export const delStorage = (key) => {
  return localStorage.removeItem(key);
};
